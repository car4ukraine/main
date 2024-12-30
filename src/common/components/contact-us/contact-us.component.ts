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
    <div class="font-tektur">
      <div class="text-4xl font-bold">
        Contact us
      </div>
      <div>
        Fill up the form, and we’ll get back to you within 24 hours
      </div>
    </div>

    <form [formGroup]="form" (ngSubmit)="submitForm()" [class.was-validated]="form.touched">

      <div class="flex flex-col gap-4">

        <div>
          <label for="disabledSelect" class="form-label"></label>
          <select formControlName="subject" id="disabledSelect"
                  class="bg-transparent block w-full mt-0 px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black"
                  [required]="isRequired('subject')">
            @for (option of options; track option) {
              <option [value]="$index"></option>
            }
          </select>
        </div>

        <div>
          <label for="pages-contact_us-form-name-input" class="form-label"></label>
          <input formControlName="name" type="text"
                 class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black"
                 id="pages-contact_us-form-name-input"
                 [required]="isRequired('name')" [placeholder]="'modules.contact_form.name.hint'">
        </div>

        <div>
          <label for="pages-contact_us-form-email-input" class="form-label"></label>
          <input formControlName="email" type="email"
                 class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black"
                 id="pages-contact_us-form-email-input" [required]="isRequired('email')"
                 [placeholder]="'modules.contact_form.email.hint'">
        </div>

        <div>
          <label for="pages-contact_us-form-message-textarea" class="form-label"></label>
          <textarea formControlName="message"
                    class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black"
                    id="pages-contact_us-form-message-textarea"
                    rows="3" [required]="isRequired('message')"
                    [placeholder]="'modules.contact_form.message.hint'"></textarea>
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

        <div class="w-[701px] h-[69px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex">
          <button
            [disabled]="pending"
            class="text-center text-[#f7f8f7] text-2xl font-medium font-['Tektur'] leading-loose tracking-[2.88px]">

            @if (pending) {

              <span class="spinner-border" role="status" aria-hidden="true"></span>
              <span class="visually-hidden">Loading...</span>

            } @else {
              SEND MESSAGE
            }
          </button>
        </div>

      </div>

    </form>

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

