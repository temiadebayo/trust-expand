'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/UI/Button';
import { Card } from '../../../components/UI/Card';
import { BookingCTA } from '../../../components/BookingCTA';

export default function PartnerRegisterPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    yearsOfExperience: '',
    
    // Tier Selection
    selectedTier: '',
    
    // KYC Documents (file names will be stored, actual upload handled separately)
    governmentId: null as File | null,
    professionalCertifications: null as File | null,
    guarantorName: '',
    guarantorPhone: '',
    guarantorEmail: '',
    guarantorRelationship: '',
    guarantorPhotoPassport: null as File | null,
    guarantorValidId: null as File | null,
    policeExtract: null as File | null,
    
    // Additional Information
    specialization: '',
    currentLocation: '',
    portfolioUrl: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (value !== null && value !== '') {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('/api/partner-register', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          yearsOfExperience: '',
          selectedTier: '',
          governmentId: null,
          professionalCertifications: null,
          guarantorName: '',
          guarantorPhone: '',
          guarantorEmail: '',
          guarantorRelationship: '',
          guarantorPhotoPassport: null,
          guarantorValidId: null,
          policeExtract: null,
          specialization: '',
          currentLocation: '',
          portfolioUrl: '',
          additionalInfo: '',
        });
        setCurrentStep(1);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getTierFromExperience = (years: string) => {
    const yearsNum = parseInt(years) || 0;
    if (yearsNum >= 10) return 'Celebrity';
    if (yearsNum >= 5) return 'Premium';
    return 'Standard';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-[#091266] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner Registration
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Complete your application to become a Trust Expand Vetted Professional
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step <= currentStep
                        ? 'bg-[#5E17EB] text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                  <div className="mt-2 text-xs text-gray-600 text-center hidden sm:block">
                    {step === 1 && 'Personal Info'}
                    {step === 2 && 'Tier Selection'}
                    {step === 3 && 'KYC Documents'}
                    {step === 4 && 'Review & Submit'}
                  </div>
                </div>
                {step < totalSteps && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      step < currentStep ? 'bg-[#5E17EB]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Registration Submitted Successfully!
                </h3>
                <p className="text-green-700 mb-4">
                  We've received your registration. Our team will review your application and contact you within 2-3 business days.
                </p>
                <Button variant="primary" href="/partner">
                  Return to Partner Page
                </Button>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">✗</div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">
                  Error Submitting Registration
                </h3>
                <p className="text-red-700">
                  Please try again or contact us directly at trustexpandng@gmail.com
                </p>
              </div>
            </div>
          )}

          {submitStatus !== 'success' && (
            <Card>
              <form onSubmit={handleSubmit} className="space-y-8 pt-4">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#091266] mb-4">Personal Information</h2>
                      <p className="text-gray-600 mb-6">Tell us about yourself</p>
                    </div>

                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-900 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          id="yearsOfExperience"
                          name="yearsOfExperience"
                          value={formData.yearsOfExperience}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] bg-white text-gray-900 font-medium transition-all duration-200 hover:border-gray-400"
                        >
                          <option value="">Select years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10-15">10-15 years</option>
                          <option value="15+">15+ years</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-900 mb-2">
                          Specialization *
                        </label>
                        <input
                          type="text"
                          id="specialization"
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="e.g., Hair Stylist, Barber, Nail Technician"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-900 mb-2">
                        Current Location *
                      </label>
                      <input
                        type="text"
                        id="currentLocation"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-900 mb-2">
                        Portfolio/Website URL (Optional)
                      </label>
                      <input
                        type="url"
                        id="portfolioUrl"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" variant="accent" onClick={nextStep}>
                        Next: Tier Selection
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Tier Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#091266] mb-4">Tier Selection</h2>
                      <p className="text-gray-600 mb-6">
                        Based on your experience, we recommend: <strong className="text-[#5E17EB]">
                          {formData.yearsOfExperience ? getTierFromExperience(formData.yearsOfExperience.split('-')[0]) : 'Select your experience first'}
                        </strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['Standard', 'Premium', 'Celebrity'].map((tier) => (
                        <div
                          key={tier}
                          onClick={() => setFormData({ ...formData, selectedTier: tier })}
                          className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.selectedTier === tier
                              ? 'border-[#5E17EB] bg-[#5E17EB]/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                              formData.selectedTier === tier ? 'bg-[#5E17EB] text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                              <span className="text-2xl font-bold">{tier[0]}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#091266] mb-2">{tier}</h3>
                            <p className="text-sm text-gray-600">
                              {tier === 'Standard' && '3-5+ years'}
                              {tier === 'Premium' && '5-10+ years'}
                              {tier === 'Celebrity' && '10-15+ years'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <input
                      type="hidden"
                      name="selectedTier"
                      value={formData.selectedTier}
                      required
                    />

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button type="button" variant="accent" onClick={nextStep} disabled={!formData.selectedTier}>
                        Next: KYC Documents
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: KYC Documents */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#091266] mb-4">KYC Document Submission</h2>
                      <p className="text-gray-600 mb-6">
                        All documents are stored with bank-grade security. This is mandatory for all applicants.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="governmentId" className="block text-sm font-medium text-gray-900 mb-2">
                        Government ID (Passport, Driver's License, or National ID) *
                      </label>
                      <input
                        type="file"
                        id="governmentId"
                        name="governmentId"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                      />
                      {formData.governmentId && (
                        <p className="mt-2 text-sm text-gray-600">Selected: {formData.governmentId.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="professionalCertifications" className="block text-sm font-medium text-gray-900 mb-2">
                        Professional Certifications *
                      </label>
                      <input
                        type="file"
                        id="professionalCertifications"
                        name="professionalCertifications"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        multiple
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                      />
                      {formData.professionalCertifications && (
                        <p className="mt-2 text-sm text-gray-600">Selected: {formData.professionalCertifications.name}</p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">You can upload multiple files</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-[#091266] mb-4">Guarantor Information *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="guarantorName" className="block text-sm font-medium text-gray-900 mb-2">
                            Guarantor Full Name *
                          </label>
                          <input
                            type="text"
                            id="guarantorName"
                            name="guarantorName"
                            value={formData.guarantorName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          />
                        </div>

                        <div>
                          <label htmlFor="guarantorPhone" className="block text-sm font-medium text-gray-900 mb-2">
                            Guarantor Phone *
                          </label>
                          <input
                            type="tel"
                            id="guarantorPhone"
                            name="guarantorPhone"
                            value={formData.guarantorPhone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          />
                        </div>

                        <div>
                          <label htmlFor="guarantorEmail" className="block text-sm font-medium text-gray-900 mb-2">
                            Guarantor Email *
                          </label>
                          <input
                            type="email"
                            id="guarantorEmail"
                            name="guarantorEmail"
                            value={formData.guarantorEmail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                          />
                        </div>

                        <div>
                          <label htmlFor="guarantorRelationship" className="block text-sm font-medium text-gray-900 mb-2">
                            Relationship *
                          </label>
                          <input
                            type="text"
                            id="guarantorRelationship"
                            name="guarantorRelationship"
                            value={formData.guarantorRelationship}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                            placeholder="e.g., Employer, Colleague, Client"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="text-lg font-semibold text-[#091266] mb-4">Guarantor Documents *</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="guarantorPhotoPassport" className="block text-sm font-medium text-gray-900 mb-2">
                            Guarantor Photo/Passport *
                          </label>
                          <input
                            type="file"
                            id="guarantorPhotoPassport"
                            name="guarantorPhotoPassport"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                          />
                          {formData.guarantorPhotoPassport && (
                            <p className="mt-2 text-sm text-gray-700">Selected: {formData.guarantorPhotoPassport.name}</p>
                          )}
                          <p className="mt-1 text-xs text-gray-600">Upload a clear photo or passport copy</p>
                        </div>
                        <div>
                          <label htmlFor="guarantorValidId" className="block text-sm font-medium text-gray-900 mb-2">
                            Guarantor Valid ID *
                          </label>
                          <input
                            type="file"
                            id="guarantorValidId"
                            name="guarantorValidId"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                          />
                          {formData.guarantorValidId && (
                            <p className="mt-2 text-sm text-gray-600">Selected: {formData.guarantorValidId.name}</p>
                          )}
                          <p className="mt-1 text-xs text-gray-500">National ID, Driver's License, or Passport</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="policeExtract" className="block text-sm font-medium text-gray-900 mb-2">
                        Police Extract (Criminal Record Check) *
                      </label>
                      <input
                        type="file"
                        id="policeExtract"
                        name="policeExtract"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                      />
                      {formData.policeExtract && (
                        <p className="mt-2 text-sm text-gray-600">Selected: {formData.policeExtract.name}</p>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button type="button" variant="accent" onClick={nextStep}>
                        Next: Review & Submit
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#091266] mb-4">Review & Submit</h2>
                      <p className="text-gray-600 mb-6">Please review your information before submitting</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#091266] mb-2">Personal Information</h3>
                        <p className="text-gray-700"><strong>Name:</strong> {formData.fullName}</p>
                        <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
                        <p className="text-gray-700"><strong>Phone:</strong> {formData.phone}</p>
                        <p className="text-gray-700"><strong>Experience:</strong> {formData.yearsOfExperience} years</p>
                        <p className="text-gray-700"><strong>Specialization:</strong> {formData.specialization}</p>
                        <p className="text-gray-700"><strong>Location:</strong> {formData.currentLocation}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#091266] mb-2">Selected Tier</h3>
                        <p className="text-gray-700"><strong>{formData.selectedTier}</strong></p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#091266] mb-2">Documents</h3>
                        <p className="text-gray-700">
                          <strong>Government ID:</strong> {formData.governmentId ? formData.governmentId.name : 'Not uploaded'}
                        </p>
                        <p className="text-gray-700">
                          <strong>Certifications:</strong> {formData.professionalCertifications ? formData.professionalCertifications.name : 'Not uploaded'}
                        </p>
                        <p className="text-gray-700">
                          <strong>Police Extract:</strong> {formData.policeExtract ? formData.policeExtract.name : 'Not uploaded'}
                        </p>
                        <p className="text-gray-700">
                          <strong>Guarantor Photo/Passport:</strong> {formData.guarantorPhotoPassport ? formData.guarantorPhotoPassport.name : 'Not uploaded'}
                        </p>
                        <p className="text-gray-700">
                          <strong>Guarantor Valid ID:</strong> {formData.guarantorValidId ? formData.guarantorValidId.name : 'Not uploaded'}
                        </p>
                      </div>

                      <div>
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Information (Optional)
                        </label>
                        <textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                          placeholder="Any additional information you'd like to share..."
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> After submission, our management team will review your application. 
                        Upon approval, you'll be contacted to pay the Registration Fee and receive your official Trust Expand Certification.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        variant="accent"
                        disabled={isSubmitting}
                        className="shadow-modern-lg"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Book Appointment CTA */}
      <BookingCTA />
    </div>
  );
}

