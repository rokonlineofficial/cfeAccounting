// `sourced: true`  -> text taken from the original website (cleaned for typos/formatting only).
// `sourced: false` -> the original services page text for this item was not in the supplied screenshots;
//                     neutral wording used. Replace with the original text if you have it.
const GROUPS = {
  'Accounting & Bookkeeping': ['accounting','payroll-services','quickbooks-assistance-and-training','general-accounting','bookkeeping','cost-accounting','fixed-asset-management'],
  'Tax': ['taxes','tax-accounting-and-consulting'],
  'Audit & Assurance': ['auditing','audit-and-assurance-services'],
  'Business & Capital': ['business-formation-and-restructuring','business-planning','cash-flow-and-budgeting-analysis','cash-infusion','capital-management'],
  'Industry Accounting': ['medical-billing','non-profit-accounting','real-estate-accounting','retail-accounting'],
}
export const groupOf = (slug) => Object.keys(GROUPS).find((g) => GROUPS[g].includes(slug))
export const groupSlug = (g) => g.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
export const groups = Object.keys(GROUPS).map((name) => ({ name, slug: groupSlug(name) }))

const s = (name, short, detail, sourced = true) => ({
  name,
  slug: name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  short,
  detail,
  sourced,
})

const raw = [
  s('Accounting', 'Day-to-day accounting for your business, kept organized and current.', 'Recording, organizing and reporting your financial activity so you always know where the business stands.', false),
  s('Payroll Services', 'Fast, easy and affordable small business payroll.', 'Fast, easy and affordable small business payroll. CFE Accounting is partnering with ADP to provide payroll for small businesses and entrepreneurs around the country.'),
  s('Business Formation and Restructuring', 'Set up a new entity or reshape an existing one.', 'Guidance when starting a company or restructuring an existing one, including business formation and setting up new companies.', false),
  s('QuickBooks Assistance & Training', 'Hands-on help and training with QuickBooks.', 'Assistance with QuickBooks setup and use, plus training so you and your team can work confidently in it.', false),
  s('Cash Flow and Budgeting Analysis', 'See where money comes from and where it goes.', 'Analysis of cash flow and budgets to help you understand your numbers and plan ahead.', false),
  s('Cash Infusion', 'Support in planning for additional capital.', 'Help thinking through and preparing for bringing additional cash into the business.', false),
  s('Business Planning', 'Clear plans to guide your next steps.', 'Structured business planning that turns goals into a plan you can follow.', false),
  s('Taxes', 'Full tax services from experts, including quarterly filing and IRS issues.', 'Full tax services offered by experts, including quarterly filing, IRS issues, and general consulting. We do taxes for individuals and businesses.'),
  s('Medical Billing', 'Billing support for healthcare practices.', 'A medical biller or insurance billing specialist is responsible for organizing patient medical costs and sending invoices to collect payment from patients and their insurers. Duties include calling patients to discuss payment and develop reasonable payment plans, entering patient data into administrative systems, and recording information about outstanding claims.'),
  s('Auditing', 'Audit and assurance to help you navigate a complex environment.', 'Companies across industries are bombarded by business disruptors, from evolving regulations to a complex economic environment to new technologies, that often make it harder to do business. CFE Accounting\'s range of audit and assurance services, combined with a comprehensive industry-focused approach, can help navigate these challenges.'),
  s('Audit & Assurance Services', 'Construction budget review, closing processes and compliance.', 'We review your construction budgets, investigate variances, approve expenses, and ensure that construction billings are issued to clients and payments collected. We maintain and review your business monthly closing processes, and prepare various reports, financial forms, and analyses. In addition, we review and analyze the capitalization of costs and ensure compliance with the policy by managing the process for proper coding of construction invoices/payment applications and lien releases for contractors, subcontractors, and vendor invoices.'),
  s('General Accounting', 'Financial information for management, reports and account entries.', 'We provide financial information to management by researching and analyzing accounting data; we prepare reports. We prepare asset, liability, and capital account entries by compiling and analyzing account information for each category.'),
  s('Tax Accounting & Consulting', 'Tax provisions, returns, planning and compliance.', 'Everything in this area is tax-related and it includes the following: prepare tax provisions schedules, returns, payments, reports and maintain a company\'s tax database; identify legal tax savings and recommend ways to improve profits. We make sure that our clients comply with federal, state and local tax regulations. We back this topic with tax consulting and prepare a plan for the future of your company and prepare you for any pitfalls you may encounter in the years to come.'),
  s('Capital Management', 'Sufficient cash flow for short-term costs and debt obligations.', 'Our primary purpose for your working capital management is to enable your company to maintain sufficient cash flow to meet its short-term operating costs and short-term debt obligations. Your company\'s working capital is made up of its current assets minus its current liabilities. We will help take care of these issues and refer you to our financial institution partners.'),
  s('Fixed Asset Management', 'Analyze, record and report on tangible and intangible assets.', 'The role of our fixed asset manager division is to analyze and report on fixed assets. This work includes recording the cost of tangible and intangible fixed assets, and accounting for the disposal of fixed assets, whether through a sale or at the end of their useful life.'),
  s('Bookkeeping', 'Accurate books, compliance, and easy-to-understand financial reports.', 'Ensure accuracy, prove compliance, and prepare quick, easy-to-understand financial reports. To simplify your job, we scan and capture the important information from receipts, bills, invoices and bank statements. We oversee your company\'s financial data and compliance by maintaining accurate books on accounts payable and receivable, payroll, and daily financial entries and reconciliations. We perform daily accounting tasks such as monthly financial reporting, general ledger entries, and record payments and adjustments if necessary.'),
  s('Non-Profit Accounting', 'Accounting, policies and fundraising planning for non-profits.', 'Non-profit accounting responsibilities include managing and overseeing the daily operations of the accounting department, monitoring and analyzing accounting data and producing financial reports or statements, and establishing and enforcing proper accounting methods, policies and principles. We ensure that your organization is meeting its responsibilities. We handle everything from structuring board meetings to creating a strategic plan for fundraising and securing adequate media exposure.'),
  s('Real Estate Accounting', 'Payables, receivables, journal entries and reconciliations.', 'Our real estate accounting division manages all accounting processes for a real estate client. It handles accounts payable and accounts receivable, produces journal entries, reconciles business accounts, and enters data into accounting software to make sure your financial reporting is accurate and organized.'),
  s('Cost Accounting', 'Collect and analyze operational costs; optimized budget plans.', 'In this area, our duties include collecting and analyzing data about a company\'s operational costs. We assess your business expenses and prepare optimized budget plans for you by setting standard costs of manufactured goods. We develop and analyze cost standards for your entire operation. We review your business financial records and research the market for key business costs and adjust the company ledger to accurately reflect balance sheets. In the end, we advise your executive board and upper management on appropriate costing based on financial data.'),
  s('Retail Accounting', 'Financial records, assessments and ways to reduce costs.', 'Our retail accountants prepare and examine financial records for retail companies, oversee their financial status, perform assessments, and make recommendations whenever necessary. Retail accounting involves tasks such as completing tax returns, examining financial data to check it meets the correct standards, and providing guidance on ways the company can reduce costs.'),
]

export const services = raw.map((x) => ({ ...x, group: groupOf(x.slug) }))
export const withGroup = (x) => ({ ...x, group: groupOf(x.slug) })
export const getService = (slug) => services.find((x) => x.slug === slug)
