import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ContactApiService} from "../../../api/contact/contact.api.service";
import {catchError, throwError} from "rxjs";
import {NgClass} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";

interface IOption {
  id: number;
  name: string;
}

@Component({
  standalone: true,
  selector: 'app-contact-us-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="font-tektur text-mainColor mb-10">
      <div class="text-6xl font-bold mb-2.5" i18n>
        Contact us
      </div>
      <div class="text-xl" i18n>
        Fill up the form, and we’ll get back to you within 24 hours
      </div>
    </div>

    <form [formGroup]="form" (ngSubmit)="submitForm()" novalidate>
      <div class="flex flex-col gap-4">
        <div [ngClass]="{'has-error': form.get('subject')?.invalid && form.get('subject')?.touched}" class="relative mb-5">
          <label for="disabledSelect" class="form-label font-tektur text-mainColor" i18n>
            Select type of your inquiry
          </label>
          <select
            formControlName="subject"
            id="disabledSelect"
            class="bg-transparent block w-full mt-0 px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black font-tektur"
          >
            <option [value]="null" disabled selected>Select...</option>
            @for (option of options; track option) {
              <option [value]="option.id">{{ option.name }}</option>
            }
          </select>
          @if (form.get('subject')?.invalid && form.get('subject')?.touched) {
            <div class="error-message text-rose-600 font-tektur absolute" i18n>
              Subject is required.
            </div>
          }
        </div>
        <div [ngClass]="{'has-error': form.get('name')?.invalid && form.get('name')?.touched}" class="relative mb-5">
          <label for="pages-contact_us-form-name-input" class="form-label font-tektur text-mainColor" i18n>
            Your Name
          </label>
          <input
            formControlName="name"
            type="text"
            id="pages-contact_us-form-name-input"
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black font-tektur text-[#7B8693]"
            [placeholder]="'Type'"
          />
          @if (form.get('name')?.invalid && form.get('name')?.touched) {
            <div class="error-message text-rose-600 font-tektur absolute" i18n>
              Name is required.
            </div>
          }
        </div>
        <div [ngClass]="{'has-error': form.get('email')?.invalid && form.get('email')?.touched}" class="relative mb-5">
          <label for="pages-contact_us-form-email-input" class="form-label font-tektur text-mainColor" i18n>
            Email
          </label>
          <input
            formControlName="email"
            type="email"
            id="pages-contact_us-form-email-input"
            class="bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black font-tektur text-[#7B8693]"
            [placeholder]="'Type'"
          />
          @if (form.get('email')?.invalid && form.get('email')?.touched) {
            <div class="error-message text-rose-600 font-tektur absolute" i18n>
              Valid email is required.
            </div>
          }
        </div>
        <div [ngClass]="{'has-error': form.get('message')?.invalid && form.get('message')?.touched}">
          <label for="pages-contact_us-form-message-textarea" class="form-label font-tektur text-mainColor" i18n>
            Message
          </label>
          <textarea
            formControlName="message"
            id="pages-contact_us-form-message-textarea"
            rows="3"
            class="relative bg-transparent mt-0 block w-full px-0.5 border-0 border-b-2 border-[#8996A5] focus:ring-0 focus:border-black font-tektur text-[#7B8693]"
            [placeholder]="'Type'"
          ></textarea>
          @if (form.get('message')?.invalid && form.get('message')?.touched) {
            <div class="error-message text-rose-600 font-tektur absolute" i18n>
              Message is required.
            </div>
          }
        </div>
        <div
          class="w-full h-[69px] px-[18px] bg-[#1f2024] justify-center items-center gap-[7px] inline-flex transition-all
                 duration-150 ease-in-out active:scale-95 cursor-pointer mt-5"
        >
          <button type="submit" [disabled]="form.invalid || pending"
                  class="send-button text-center text-[#f7f8f7] text-2xl font-medium font-['Tektur'] leading-loose
                         tracking-[2.88px] transition-all duration-150 ease-in-out active:scale-95 active:shadow-lg"
          >
            @if (pending) {
              <span class="spinner-border spinner-border-sm font-tektur"></span>
            }
            @if (!pending) {
              <span class="cursor-pointer font-tektur" i18n>SEND MESSAGE</span>
            }
          </button>
        </div>
      </div>
    </form>
  `,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  host: {
    class: 'w-full bg-white py-10 flex flex-col'
  }
})
export class ContactUsComponent implements OnInit {

  public options: IOption[] = [];
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

  public initOptions(): void {
    this.options =
      [
        {id: 1, name: 'Regarding my donation'},
        {id: 2, name: 'I have a car to donate'},
        {id: 3, name: 'I\'d like to buy a car for you'},
        {id: 4, name: 'I can help with media and promotion'},
        {id: 5, name: 'Message of Support'},
        {id: 6, name: 'Other'}
      ]
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      subject: [null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(5)]],
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
          catchError((error: HttpErrorResponse) => {
            this.stopPending();
            this.showErrorAlert = true;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.form.reset({
            subject: null
          });
          this.stopPending();
          this.showSuccessAlert = true;
        });
    } else {
      this.stopPending();
    }
  }
}

