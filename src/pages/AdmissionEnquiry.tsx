import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';

const initialForm = {
  fullName: '', dob: '', gender: '', category: '',
  mobile: '', email: '', address: '', city: '', pincode: '',
  applyingFor: '', academicYear: '', lastSchool: '', lastClass: '', percentage: '',
  hearAbout: '', message: '',
};

export default function AdmissionEnquiry() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.dob) e.dob = 'Date of birth is required';
    if (!form.gender) e.gender = 'Please select gender';
    if (!form.category) e.category = 'Please select category';
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit mobile number';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.pincode.trim()) e.pincode = 'Pincode is required';
    else if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode';
    if (!form.applyingFor) e.applyingFor = 'Please select class';
    if (!form.academicYear) e.academicYear = 'Please select academic year';
    if (!form.lastSchool.trim()) e.lastSchool = 'Last school name is required';
    if (!form.lastClass.trim()) e.lastClass = 'Last class passed is required';
    if (!form.percentage.trim()) e.percentage = 'Percentage / CGPA is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClass = (field) =>
    `w-full border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-slate-200'} rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy transition`;

  const classes = ['Nursery', 'LKG', 'UKG', ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg border border-slate-200 p-10 max-w-md w-full text-center shadow-sm">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-brand-navy mb-2">Enquiry Submitted!</h2>
          <p className="text-slate-600 text-sm mb-6">
            Thank you <span className="font-semibold text-brand-navy">{form.fullName}</span>! Your admission enquiry has been submitted successfully. Our team will contact you on <span className="font-semibold">{form.mobile}</span> within 24 hours.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-brand-maroon text-white px-8 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-navy transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/70 hover:text-white text-xs uppercase tracking-widest mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Online Admission Enquiry</h1>
          <p className="text-white/60 text-sm mt-1">Ankur Public School, Aligarh — Fill in your details below</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Section 1 — Personal Details */}
        <div className="bg-white rounded-lg border border-slate-200 border-l-4 border-l-brand-navy overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
            <User className="w-4 h-4 text-brand-navy" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy">Personal Details</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input name="fullName" value={form.fullName} onChange={handle} placeholder="Enter full name" className={inputClass('fullName')} />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Date of Birth <span className="text-red-500">*</span></label>
              <input type="date" name="dob" value={form.dob} onChange={handle} className={inputClass('dob')} />
              {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Gender <span className="text-red-500">*</span></label>
              <select name="gender" value={form.gender} onChange={handle} className={inputClass('gender')}>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Category <span className="text-red-500">*</span></label>
              <select name="category" value={form.category} onChange={handle} className={inputClass('category')}>
                <option value="">Select category</option>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>EWS</option>
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>
          </div>
        </div>

        {/* Section 2 — Contact Details */}
        <div className="bg-white rounded-lg border border-slate-200 border-l-4 border-l-brand-maroon overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-maroon" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-maroon">Contact Details</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Mobile Number <span className="text-red-500">*</span></label>
              <input name="mobile" value={form.mobile} onChange={handle} placeholder="10-digit mobile number" maxLength={10} className={inputClass('mobile')} />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input type="email" name="email" value={form.email} onChange={handle} placeholder="you@example.com" className={inputClass('email')} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Address <span className="text-red-500">*</span></label>
              <textarea name="address" value={form.address} onChange={handle} rows={3} placeholder="House no, Street, Locality" className={inputClass('address')} />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">City <span className="text-red-500">*</span></label>
              <input name="city" value={form.city} onChange={handle} placeholder="City" className={inputClass('city')} />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Pincode <span className="text-red-500">*</span></label>
              <input name="pincode" value={form.pincode} onChange={handle} placeholder="6-digit pincode" maxLength={6} className={inputClass('pincode')} />
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
          </div>
        </div>

        {/* Section 3 — Academic Details */}
        <div className="bg-white rounded-lg border border-slate-200 border-l-4 border-l-brand-navy overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-navy" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-navy">Academic Details</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Applying for Class <span className="text-red-500">*</span></label>
              <select name="applyingFor" value={form.applyingFor} onChange={handle} className={inputClass('applyingFor')}>
                <option value="">Select class</option>
                {classes.map(c => <option key={c}>{c}</option>)}
              </select>
              {errors.applyingFor && <p className="text-red-500 text-xs mt-1">{errors.applyingFor}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Academic Year <span className="text-red-500">*</span></label>
              <select name="academicYear" value={form.academicYear} onChange={handle} className={inputClass('academicYear')}>
                <option value="">Select year</option>
                <option>2025-26</option>
                <option>2026-27</option>
              </select>
              {errors.academicYear && <p className="text-red-500 text-xs mt-1">{errors.academicYear}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Last School / College Attended <span className="text-red-500">*</span></label>
              <input name="lastSchool" value={form.lastSchool} onChange={handle} placeholder="School or college name" className={inputClass('lastSchool')} />
              {errors.lastSchool && <p className="text-red-500 text-xs mt-1">{errors.lastSchool}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Last Class Passed <span className="text-red-500">*</span></label>
              <input name="lastClass" value={form.lastClass} onChange={handle} placeholder="e.g. Class 9" className={inputClass('lastClass')} />
              {errors.lastClass && <p className="text-red-500 text-xs mt-1">{errors.lastClass}</p>}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Percentage / CGPA <span className="text-red-500">*</span></label>
              <input name="percentage" value={form.percentage} onChange={handle} placeholder="e.g. 85% or 8.5 CGPA" className={inputClass('percentage')} />
              {errors.percentage && <p className="text-red-500 text-xs mt-1">{errors.percentage}</p>}
            </div>
          </div>
        </div>

        {/* Section 4 — Other */}
        <div className="bg-white rounded-lg border border-slate-200 border-l-4 border-l-brand-maroon overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-brand-maroon" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-maroon">Other Information</h2>
          </div>
          <div className="p-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">How did you hear about us?</label>
              <select name="hearAbout" value={form.hearAbout} onChange={handle} className={inputClass('hearAbout')}>
                <option value="">Select an option</option>
                <option>Social Media</option>
                <option>Friend / Relative</option>
                <option>Advertisement</option>
                <option>Website</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Message or Query <span className="text-slate-400 font-normal">(optional)</span></label>
              <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Any questions or additional information..." className={inputClass('message')} />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end pb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 border border-slate-300 rounded-sm text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-100 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-brand-maroon text-white px-10 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-navy transition-all shadow-md active:scale-95"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}