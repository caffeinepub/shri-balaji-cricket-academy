import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, MapPin, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitContactForm, type ContactFormData } from '@/hooks/useQueries';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = useSubmitContactForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitMutation.mutateAsync(data);
      setSubmitted(true);
      reset();
    } catch {
      // error handled via mutation state
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cricket-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-cricket-green font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-cricket-charcoal mt-2 mb-4">
            Enroll Your Child
          </h2>
          <div className="w-16 h-1 gold-gradient mx-auto rounded-full mb-4" />
          <p className="font-body text-muted-foreground text-base max-w-xl mx-auto">
            Fill in the form below and our team will get back to you within 24 hours to discuss
            the best program for your child.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-cricket-charcoal mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-cricket-green flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-cricket-gold" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-cricket-charcoal text-sm">Phone</p>
                    <p className="font-body text-muted-foreground text-sm">+91 98765 43210</p>
                    <p className="font-body text-muted-foreground text-sm">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-cricket-green flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-cricket-gold" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-cricket-charcoal text-sm">Email</p>
                    <p className="font-body text-muted-foreground text-sm">
                      info@shribalajicriacademy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-cricket-green flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-cricket-gold" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-cricket-charcoal text-sm">Address</p>
                    <p className="font-body text-muted-foreground text-sm">
                      Shri Balaji Cricket Academy,
                      <br />
                      Malerna Gaon, Ballabgarh,
                      <br />
                      Faridabad – 121004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-cricket-green rounded-sm p-5">
              <h4 className="font-display font-bold text-cricket-gold text-lg mb-3">
                Training Hours
              </h4>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between text-cricket-cream/80">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-cricket-cream">6:00 AM – 9:00 AM</span>
                </div>
                <div className="flex justify-between text-cricket-cream/80">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-cricket-cream">4:00 PM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-cricket-cream/80">
                  <span>Saturday – Sunday</span>
                  <span className="font-semibold text-cricket-cream">7:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Age Note */}
            <div className="border-l-4 border-cricket-gold pl-4 py-1">
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-cricket-charcoal">Minimum Age:</span> We
                accept enrollments for children aged{' '}
                <span className="text-cricket-green font-bold">7 years and above</span>.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-cricket-gold/30 rounded-sm p-10 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-cricket-green/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} className="text-cricket-green" />
                </div>
                <h3 className="font-display font-bold text-2xl text-cricket-charcoal mb-2">
                  Enquiry Submitted!
                </h3>
                <p className="font-body text-muted-foreground text-base mb-6">
                  Thank you for your interest in Shri Balaji Cricket Academy. Our team will
                  contact you within 24 hours to discuss the best program for your child.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-cricket-green text-cricket-cream hover:bg-cricket-green-dark font-body font-semibold rounded-sm border-0"
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card border border-border rounded-sm p-6 md:p-8 shadow-card space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Child's Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="childsName"
                      className="font-body font-medium text-sm text-cricket-charcoal"
                    >
                      Child's Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="childsName"
                      placeholder="Enter child's full name"
                      className="font-body rounded-sm border-border focus:border-cricket-green focus:ring-cricket-green/20"
                      {...register('childsName', {
                        required: "Child's name is required",
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                    />
                    {errors.childsName && (
                      <p className="font-body text-destructive text-xs flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.childsName.message}
                      </p>
                    )}
                  </div>

                  {/* Parent's Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="parentsName"
                      className="font-body font-medium text-sm text-cricket-charcoal"
                    >
                      Parent's Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="parentsName"
                      placeholder="Enter parent's full name"
                      className="font-body rounded-sm border-border focus:border-cricket-green focus:ring-cricket-green/20"
                      {...register('parentsName', {
                        required: "Parent's name is required",
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                    />
                    {errors.parentsName && (
                      <p className="font-body text-destructive text-xs flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.parentsName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phoneNumber"
                      className="font-body font-medium text-sm text-cricket-charcoal"
                    >
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="font-body rounded-sm border-border focus:border-cricket-green focus:ring-cricket-green/20"
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[\d\s\-()]{8,15}$/,
                          message: 'Enter a valid phone number',
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="font-body text-destructive text-xs flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Child's Age */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="childsAge"
                      className="font-body font-medium text-sm text-cricket-charcoal"
                    >
                      Child's Age <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="childsAge"
                      type="number"
                      placeholder="Age (min. 7 years)"
                      min={7}
                      max={18}
                      className="font-body rounded-sm border-border focus:border-cricket-green focus:ring-cricket-green/20"
                      {...register('childsAge', {
                        required: "Child's age is required",
                        valueAsNumber: true,
                        min: {
                          value: 7,
                          message: 'Minimum enrollment age is 7 years',
                        },
                        max: {
                          value: 18,
                          message: 'Maximum age for enrollment is 18 years',
                        },
                      })}
                    />
                    {errors.childsAge && (
                      <p className="font-body text-destructive text-xs flex items-center gap-1">
                        <AlertCircle size={12} />
                        {errors.childsAge.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-body font-medium text-sm text-cricket-charcoal"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child's cricket experience, preferred program, or any questions you have..."
                    rows={4}
                    className="font-body rounded-sm border-border focus:border-cricket-green focus:ring-cricket-green/20 resize-none"
                    {...register('message', {
                      required: 'Please add a message',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                  />
                  {errors.message && (
                    <p className="font-body text-destructive text-xs flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Error */}
                {submitMutation.isError && (
                  <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-sm">
                    <AlertCircle size={16} className="text-destructive flex-shrink-0" />
                    <p className="font-body text-destructive text-sm">
                      {submitMutation.error instanceof Error
                        ? submitMutation.error.message.includes('already submitted')
                          ? 'An enquiry for this child and parent combination already exists.'
                          : submitMutation.error.message
                        : 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full gold-gradient text-cricket-charcoal font-body font-bold text-base py-3 h-auto rounded-sm shadow-gold hover:opacity-90 transition-all duration-200 border-0 disabled:opacity-60"
                >
                  {submitMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      Submitting Enquiry...
                    </span>
                  ) : (
                    'Submit Enquiry'
                  )}
                </Button>

                <p className="font-body text-muted-foreground text-xs text-center">
                  By submitting, you agree to be contacted by our team regarding enrollment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
