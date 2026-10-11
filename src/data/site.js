// Business facts, taken from the original cfeaccounting.com / cfecompanies pages.
export const SITE = {
  name: 'CFE Companies',
  altName: 'CFE Accounting',
  tagline: 'Getting Your Financial Life In Order',
  disciplines: ['Taxes', 'Accounting', 'Consulting', 'Investments'],
  email: 'zca@cfeaccounting.com',
  inquiryEmail: 'info@cfeaccounting.com',
  address: ['1727-8A Sardis Rd N', 'Charlotte, NC 28270'],
  founded: 2006,
  founder: { name: 'Zadih Cadyma', role: 'CEO & Founder / Managing Director' },
  // Original site shows Facebook, Twitter, LinkedIn and YouTube icons but the URLs were not in the screenshots.
  // Add real URLs here; empty = nothing rendered.
  socials: [
    // { label: 'Facebook', href: 'https://...' },
    // { label: 'Twitter', href: 'https://...' },
    // { label: 'LinkedIn', href: 'https://...' },
    // { label: 'YouTube', href: 'https://...' },
  ],
  welcome: [
    'The Staff at CFE Accounting thank you for taking time and considering us when it comes to your financial needs.',
    'Accredited by the BBB since 2012 and a member of the National Society of Accountants (NSA). With over 20 years of experience, the Staff provide a blend of professional service, expertise, all while maintaining a friendly and personal experience while you work with us to meet all personal, business, or professional needs.',
  ],
  freeNote: 'Consultations are FREE!',
  specialties: [
    'Full Tax Services that are offered by experts, including quarterly filing, IRS issues, and general consulting',
    'Book Keeping, including general accounting & financial planning',
    'Fundraising efforts',
    'Estate Planning, including living wills & trusts',
  ],
  outsource: 'Why pay a fortune for an in-house bookkeeping staff when you can outsource to a trusted firm, CFE Accounting. Your customers and vendors will never know we exist! Get daily, weekly, monthly or annual services for a reasonable quote.',
  newOffer: 'NEW! Now offering website creation, planning, and management. Check out the Services tab for more info.',
  // Logos: supplied by the client (tax, consulting, publishing, properties) / from the original site (holding company).
  // `related` = slugs from services.js shown on each company's page.
  family: [
    { slug: 'cfe-companies', name: 'CFE Companies', logo: 'companies', text: 'We are a holding company for all the CFE Companies: Accounting and Tax Services.', related: ['accounting', 'taxes', 'tax-accounting-and-consulting'] },
    { slug: 'cfe-tax-services', name: 'CFE Tax Services', logo: 'tax', text: 'We do taxes for individuals and businesses. Tax planning and bookkeeping.', related: ['taxes', 'tax-accounting-and-consulting', 'bookkeeping'] },
    { slug: 'cfe-consulting', name: 'CFE Consulting', logo: 'consulting', text: 'Our management consultants work with domestic and global clients (organizations).', related: ['business-planning', 'business-formation-and-restructuring', 'cash-flow-and-budgeting-analysis'] },
    { slug: 'cfe-properties-corp', name: 'CFE Properties Corp', logo: 'realestate', text: 'Real estate development, management, and acquisition.', related: ['real-estate-accounting', 'fixed-asset-management'] },
    { slug: 'cfe-publishing', name: 'CFE Publishing', logo: 'publishing', text: 'We write and publish our books and clients as well. As publishers, we set the editorial direction.', related: [] },
    { slug: 'money-masters-international', name: 'Money Masters International', logo: null, text: 'We teach the principles and laws of wealth building. We use universal and spiritual laws.', related: [] },
  ],
  specialtyBlocks: [
    { id: 'tax', title: 'Full Tax Services', lead: 'Offered by experts, including quarterly filing, IRS issues, and general consulting.', services: ['taxes', 'tax-accounting-and-consulting'] },
    { id: 'bookkeeping', title: 'Book Keeping', lead: 'Including general accounting and financial planning.', services: ['bookkeeping', 'general-accounting'] },
    { id: 'fundraising', title: 'Fundraising Efforts', lead: 'We handle everything from structuring board meetings to creating a strategic plan for fundraising and securing adequate media exposure.', services: ['non-profit-accounting'] },
    { id: 'estate', title: 'Estate Planning', lead: 'Including living wills and trusts.', services: [] },
    { id: 'web', title: 'Website Creation, Planning & Management', lead: 'NEW! Now offering website creation, planning, and management. Check out the Services tab for more info.', services: [] },
  ],
  provide: [
    'Accounting, Payroll Services', 'Business Formation and Restructuring', 'QuickBooks Assistance & Training',
    'Cash Flow and Budgeting Analysis', 'Cash Infusion', 'Business Planning', 'Taxes',
  ],
  timeline: [
    { year: '2006', text: 'CFE was founded by managing director Zadih Cadyma after leaving Corporate America.' },
    { year: '2012', text: 'Accredited by the BBB (Better Business Bureau).' },
    { year: '20+', text: 'Over 20 years of experience serving personal, business, and professional needs.' },
  ],
  competencies: [
    { label: 'Background', text: 'Results-oriented professional who possesses a wide array of business skills in Corporate, Automotive Sales and Repairs, Health Care, Construction, Real Estate, Non-Profit, Retail, Mass Merchandising, Accounting and General Administration duties.' },
    { label: 'Planning', text: 'Budgeting including solid planning and organizational skills in coordinating all aspects of each project from inception through completion. Sees the big picture and plans appropriate strategies to achieve results.' },
    { label: 'Discipline', text: 'Well disciplined with proven ability to manage multiple assignments efficiently under extreme pressure while meeting tight deadline schedules.' },
    { label: 'Leadership', text: 'Ascertains needs and goals, streamlines existing operations, turns around unprofitable functions, envisions new concepts and future trends, and follows through with development, direction, and accomplishment. Effectively communicates direction, commits people to action, and conveys complex information in easily understood formats.' },
    { label: 'Accounting operations', text: 'Highly skilled in day-to-day accounting operations: Receivables, Payables, Bank Reconciliation; Payroll; General Ledgers review and analysis; Auditing, financial report preparation and analysis, including database design and implementation; extensive experience with all Generally Accepted Accounting Principles (GAAP) and its compliance, including the new SEC Sarbanes-Oxley compliance regulations (Forms 10-K, 10-Q). Demonstrated leadership qualities in accounting and related fields.' },
    { label: 'Tax knowledge', text: 'Knowledge of tax related GAAP and tax accounting methods, including income tax law and regulations.' },
  ],
  directions: 'https://www.google.com/maps/search/?api=1&query=1727-8A+Sardis+Rd+N+Charlotte+NC+28270',
  contactNote: 'Please don\'t hesitate to call us about any question about the services we provide.',
  trust: [
    { value: '2012', label: 'Accredited by the BBB since 2012' },
    { value: 'NSA', label: 'Member of the National Society of Accountants (NSA)' },
    { value: '20+', label: 'Over 20 years of experience' },
  ],
  bio: [
    'Results-oriented professional who possesses a wide array of business skills in Corporate, Automotive Sales and Repairs, Health Care, Construction, Real Estate, Non-Profit, Retail, Mass Merchandising, Accounting and General Administration duties.',
    'Budgeting including solid planning and organizational skills in coordinating all aspects of each project from inception through completion. Sees the big picture and plans appropriate strategies to achieve results.',
    'Well disciplined with proven ability to manage multiple assignments efficiently under extreme pressure while meeting tight deadline schedules.',
    'Ascertains needs and goals, streamlines existing operations, turns around unprofitable functions, envisions new concepts and future trends, and follows through with development, direction, and accomplishment. Effectively communicates direction, commits people to action, and conveys complex information in easily understood formats.',
    'Highly skilled in day-to-day accounting operations: Receivables, Payables, Bank Reconciliation; Payroll; General Ledgers review and analysis; Auditing, financial report preparation and analysis, including database design and implementation; extensive experience with all Generally Accepted Accounting Principles (GAAP) and its compliance, including the new SEC Sarbanes-Oxley compliance regulations (Forms 10-K, 10-Q). Demonstrated leadership qualities in accounting and related fields.',
    'Knowledge of tax related GAAP and tax accounting methods, including income tax law and regulations.',
  ],
  experience: [
    'Corporate', 'Automotive Sales and Repairs', 'Health Care', 'Construction',
    'Real Estate', 'Non-Profit', 'Retail', 'Mass Merchandising', 'Accounting', 'General Administration',
  ],
  expertise: [
    'Ability to take ownership and partner with the business leaders',
    'Ability to develop, interpret and apply required policies and procedures',
    'Ability to work in a team environment',
    'Writing business plans',
    'Business formation',
    'Setting up new companies',
    'Creating business systems and procedures',
    'Tax return preparation for individuals and business alike',
    'Tax planning and strategies',
    'Taxation issues solutions',
  ],
  // `note` lines are taken from the original service descriptions / founder profile.
  why: [
    { title: 'Accurate Record Keeping', note: 'We oversee your company\'s financial data and compliance by maintaining accurate books on accounts payable and receivable, payroll, and daily financial entries and reconciliations.' },
    { title: 'Always On Time', note: 'Proven ability to manage multiple assignments efficiently under extreme pressure while meeting tight deadline schedules.' },
    { title: 'Hard Working', note: 'Follows through with development, direction, and accomplishment.' },
    { title: '24/7 Availability', note: '' },
    { title: 'Maximum Profitability', note: 'We identify legal tax savings and recommend ways to improve profits.' },
    { title: 'Classified Transactions', note: 'We scan and capture the important information from receipts, bills, invoices and bank statements, with proper coding of invoices and payment applications.' },
    { title: 'Always Accurate', note: 'Ensure accuracy, prove compliance, and prepare quick, easy-to-understand financial reports.' },
  ],
}
