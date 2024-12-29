import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactApiService} from "../../../api/contact/contact.api.service";
import {catchError, throwError} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-contact-us-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      Contact us
    </div>
    <div>
      Fill up the form, and we’ll get back to you within 24 hours
    </div>
    <div class="bg-white p-5 mx-lg-5 mb-5 shadow">
      <div class="row mx-lg-5 px-lg-5">
        <div class="col-md-12 mx-lg-5 px-lg-5">

          <div class="row">

            <h2 class="col-12 text-center font-custom fw-bold fs-3"></h2>

          </div>

          <form [formGroup]="form" (ngSubmit)="submitForm()" [class.was-validated]="form.touched"
                class="mt-5 font-custom">
            <div class="row ">

              <div class="col-12">

                <div class="mb-3">
                  <label for="disabledSelect" class="form-label"></label>
                  <select formControlName="subject" id="disabledSelect" class="form-select cursor-pointer"
                          [required]="isRequired('subject')">
                    @for (option of options; track option) {
                      <option [value]="$index"></option>
                    }
                  </select>
                </div>

                <div class="mb-3">
                  <label for="pages-contact_us-form-name-input" class="form-label"></label>
                  <input formControlName="name" type="text" class="form-control" id="pages-contact_us-form-name-input"
                         [required]="isRequired('name')" [placeholder]="'modules.contact_form.name.hint'">
                </div>

                <div class="mb-3">
                  <label for="pages-contact_us-form-email-input" class="form-label"></label>
                  <input formControlName="email" type="email" class="form-control"
                         id="pages-contact_us-form-email-input" [required]="isRequired('email')"
                         [placeholder]="'modules.contact_form.email.hint'">
                </div>

                <div class="mb-3">
                  <label for="pages-contact_us-form-message-textarea" class="form-label"></label>
                  <textarea formControlName="message" class="form-control" id="pages-contact_us-form-message-textarea"
                            rows="3" [required]="isRequired('message')"
                            [placeholder]="'modules.contact_form.message.hint'"></textarea>
                </div>

              </div>

              @if (showSuccessAlert) {
                <div class="col-12">

                  <div class="alert alert-success d-flex align-items-center justify-content-center" role="alert">
                    <i class="bi bi-check-circle me-2"></i>
                    <div [innerText]="'modules.contact_form.notifications.success'"></div>
                  </div>

                </div>

              }

              @if (showErrorAlert) {

                <div class="col-12">

                  <div class="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
                    <i class="bi bi-x-circle me-2"></i>
                    <div [innerText]="'modules.contact_form.notifications.error'"> Error, check data or try later.</div>
                  </div>

                </div>

              }

              <div class="col align pt-5">
                <button type="submit" class="btn btn-primary btn-font w-100 py-3 text-white" [disabled]="pending">

                  @if (pending) {

                    <span class="spinner-border" role="status" aria-hidden="true"></span>
                    <span class="visually-hidden">Loading...</span>

                  } @else {

                    {{ 'modules.contact_form.submit.label' }}

                  }

                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>

  `,
  imports: [
    ReactiveFormsModule
  ],
  host: {
    class: ''
  }
})
export class ContactUsComponent implements OnInit {

  public readonly options: any[] = [];
  public form!: FormGroup;
  public pending: boolean = false;
  public showSuccessAlert: boolean = false;
  public showErrorAlert: boolean = false;

  private readonly formBuilder = inject(FormBuilder);
  private readonly contactApiService = inject(ContactApiService);

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
  }

  private initOptions(): void {
    this.options.length = 6;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      subject: [0, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      message: [null, [Validators.required]]
    });
  }

  private startPending(): void {
    this.pending = true;
  }

  private stopPending(): void {
    this.pending = false;
  }

  private resetAlerts(): void {
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }

  public async submitForm(): Promise<void> {
    this.resetAlerts();
    this.startPending();
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // TODO
      const subject = 'TODO';
      // const subject: string = await this.translateService.stream(`pages.contact_us.form.inquiries.${this.form.value.subject}.title`).pipe(take(1)).toPromise();
      this.contactApiService.postDocument(JSON.stringify({
        ...this.form.value,
        subject
      }))
        .pipe(
          catchError(error => {
            this.stopPending();
            this.showErrorAlert = true;
            return throwError(error);
          })
        )
        .subscribe(() => {
          this.form.reset({
            type: 0
          });
          this.stopPending();
          this.showSuccessAlert = true;
        });
    } else {
      this.stopPending();
    }
  }

  /**
   *
   * @param controlName
   */
  public isRequired(controlName: string): boolean {
    return <boolean>this.form.get(controlName)?.hasValidator(Validators.required);
  }
}

