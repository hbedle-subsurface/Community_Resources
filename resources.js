/* ============================================================
   RESOURCE DATA — from the McFarlin Memorial UMC Resource List
   dated 4.7.26.

   TO UPDATE A LISTING: find it below and edit the text between
   the quote marks. Keep the punctuation (commas, braces) exactly
   as it is.

   Fields for each listing:
     n     name (required)
     a     address
     d     details: hours, requirements, limits
     p     phone (Norman numbers are 405 unless shown otherwise)
     p2    a second phone, with its own label
     w     website (no "https://")
     e     email
     cats  which categories it appears under (see CATEGORIES below)
     g     subheading it sits under, if any
   ============================================================ */

const CATEGORIES = [
  { id: "food",      label: "Food & meals",            blurb: "Pantries, hot meals, senior lunches" },
  { id: "shelter",   label: "A place to stay",         blurb: "Shelters, transitional and low-cost housing" },
  { id: "money",     label: "Rent, bills & taxes",     blurb: "Utility help, rent help, free tax prep" },
  { id: "health",    label: "Health & medical",        blurb: "Free clinics, prescriptions, women's health" },
  { id: "mental",    label: "Mental health & recovery",blurb: "Counseling, crisis care, addiction support" },
  { id: "children",  label: "Children & parents",      blurb: "Diapers, childcare, teens, family support" },
  { id: "clothing",  label: "Clothing & laundry",      blurb: "Closets, thrift vouchers, free laundry" },
  { id: "seniors",   label: "Seniors & veterans",      blurb: "Aging services, caregivers, VA claims" },
  { id: "transport", label: "Getting around",          blurb: "Bus, rides, gas cards, car repair" },
  { id: "general",   label: "Legal, ID & other help",  blurb: "IDs, legal aid, safety, jobs, showers" },
  { id: "pets",      label: "Pets",                    blurb: "Pet food, supplies, spay and neuter" }
];

const RESOURCES = [

  /* ---------- FOOD: NORMAN ---------- */
  { n: "Adventist Community Services", a: "1818 E. Alameda", d: "3rd, 4th and 5th Tuesdays, 9–12. Current ID and proof of residence in Cleveland or McClain County.", p: "405-250-3589", cats: ["food"], g: "Norman" },
  { n: "Aging Services — Adult Wellness & Education Center", a: "602 N. Findlay", d: "Meals for seniors served M–F, 11:30–12. Reservations must be made in person on site the previous Friday between 11:00 and 11:30 for the following week. Suggested donation. (Flyer lists 572-206-3718 — call Aging Services at 405-321-3200 to confirm.)", cats: ["food", "seniors"], g: "Norman" },
  { n: "Alameda Baptist Church", a: "1503 Alameda", d: "Tues and Thurs 10–12, by appointment only. Call or leave a message by 8 a.m. that morning. Norman and Noble residents with ID. Limit 4 times.", p: "405-329-5157", cats: ["food"], g: "Norman" },
  { n: "Alameda Church of Christ", a: "801 E. Alameda", d: "Wed 10–12, 4th Thurs 5–6:30, 2nd Sat 9–11. Photo ID for residents of Cleveland or McClain County.", p: "405-321-0788", cats: ["food"], g: "Norman" },
  { n: "Antioch Norman — \"The Table\"", a: "1330 E. Lindsey", d: "Community dinner on the 1st and 3rd Mondays of the month, 6:00–7:30.", p: "405-310-4343", cats: ["food"], g: "Norman" },
  { n: "Beacon Project (Pantry Partners)", a: "513 W. Gray", d: "Serving Norman Public Schools high school teens, ages 13–19.", p: "405-217-2077", e: "info@thebeaconproject.org", cats: ["food", "children"], g: "Norman" },
  { n: "Crosspointe Church", a: "2601 SE 24th", d: "Fridays 8:30–11:30. Photo ID required. Limit every 6–8 weeks.", p: "405-329-0823", cats: ["food"], g: "Norman" },
  { n: "First Baptist Church of Norman", a: "211 W. Comanche", d: "Food bags on request during office hours, M–F 8–12 and 1:30–5. Push the intercom button.", p: "405-321-1753", cats: ["food"], g: "Norman" },
  { n: "Food and Shelter", a: "201 Reed", d: "Breakfast 8–10 and lunch at 11, seven days a week. For the pantry, see The Share Center.", p: "405-360-4954", cats: ["food", "shelter"], g: "Norman" },
  { n: "Goodrich UMC Care Closet", a: "200 W. Hayes", d: "3rd Thursday, 11:00–12:00. Hygiene and paper items. Norman residents, ID required.", p: "405-321-0975", cats: ["food"], g: "Norman" },
  { n: "Lifespring Church", a: "600 W. Tecumseh", d: "1st Saturday, 10–11. First come, first served while supplies last.", p: "405-292-7770", w: "mylifespring.church/share-ministry", cats: ["food"], g: "Norman" },
  { n: "McFarlin Memorial UMC Pantry", a: "401 S. University", d: "Tues and Thurs 10–4, plus two Saturdays a month 10–1 (call for dates). Two-week limit. Serving residents of Norman, Noble and Little Axe.", p: "405-766-7962", cats: ["food"], g: "Norman" },
  { n: "McFarlin Tuesday Together Meal", a: "419 S. University", d: "Free community dinner, 6:00–7:00 in Fenn Hall, 2nd Tuesday of the month. Call to confirm.", p: "405-321-3484", cats: ["food"], g: "Norman" },
  { n: "Meals on Wheels of Norman", a: "528 E. Main", d: "Office hours M–Th 7:30–3:30, F 7:30–2. Must be over 62; under 62 requires a disability or doctor referral.", p: "405-321-7272", w: "mealsonwheelsnorman.com", cats: ["food", "seniors"], g: "Norman" },
  { n: "Outreach Thrift", a: "621 12th Ave NE", d: "Refrigerated and canned goods pantry available during store hours: M–F 10–6, Sat 10–7, Sun 12–6.", p: "405-928-2072", cats: ["food"], g: "Norman" },
  { n: "Roserock Villa", a: "2227 W. Lindsey", d: "Lunch for seniors with 24-hour call-in reservation. Suggested donation $3 for ages 60+.", p: "405-321-3200", w: "agingservicesok.com", cats: ["food", "seniors"], g: "Norman" },
  { n: "Salvation Army — community meals", a: "318 E. Hayes", d: "Hot meals seven days a week. Dinner served 5:00–5:45.", p: "405-364-9910", cats: ["food"], g: "Norman" },
  { n: "Salvation Army Food Pantry", a: "1124 N. Porter", d: "Wednesdays only. Call any time to make an appointment. Client-choice pantry. 30-day limit.", p: "405-364-9910", cats: ["food"], g: "Norman" },
  { n: "The Mission", a: "2525 E. Lindsey", d: "Mon–Wed 10–2, Thurs 2–5, Fri 10–12. No ID required. 30-day limit.", p: "405-321-8880", cats: ["food"], g: "Norman" },
  { n: "The Share Center (Food and Shelter)", a: "213 Reed", d: "Tues and Wed 2:30–5:30, Thurs and Fri 11–2, 3rd Sat 12–2. Norman, Noble, Lexington or McClain County. Photo ID and proof of residence.", p: "405-701-1890", cats: ["food"], g: "Norman" },
  { n: "South Canadian Valley Pantry", a: "2217 24th SW", d: "Every 2nd Saturday of the month, 10–11:30 a.m.", p: "405-364-4051", cats: ["food"], g: "Norman" },
  { n: "University of Oklahoma Food Pantry", a: "331 Cate Center Dr.", d: "Current dates and hours online. Students, staff or faculty; OU employee ID card required.", w: "ou.edu/foodpantry", cats: ["food"], g: "Norman" },
  { n: "24/7 outdoor pantries in Norman", d: "A community-maintained list of self-serve pantries you can visit any time, day or night.", w: "facebook.com/groups/pantrypagenorman/", cats: ["food"], g: "Norman" },

  /* ---------- FOOD: EAST NORMAN, NOBLE & LEXINGTON ---------- */
  { n: "Circle the Wagon's Ministries", a: "604 E. Broadway, Lexington", d: "2nd and 4th Tuesdays of the month, 2–4 p.m. No income limit.", p: "405-835-9937", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "First Baptist of Noble", a: "330 E. Chestnut", d: "Mondays 1:30–3:00. Serving residents from Hwy 77 east to 96th, and Post Oak south to Slaughterville Rd. Once every 6 weeks.", p: "405-872-3529", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "First Baptist of Lexington", a: "900 E. Broadway", d: "Non-perishable items, M–Th 9–4 by appointment. Limit once every 90 days. Call first.", p: "405-527-6758", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "First Methodist of Lexington", a: "631 E. Ash, Lexington", d: "3rd Saturday, 12–4:00. Area residents may shop for food items.", p: "405-527-3506", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "First State Bank — Noble", a: "102 N. Main", d: "Walk-ins M–F 9–5, Sat 9–12. Limit once every 6 months.", p: "405-872-3434", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "Hilltop Baptist — East Norman", a: "11710 E. Stella Rd", d: "Mon and Thurs 9:30–12. Photo ID, 15-mile radius, 30-day limit. Bring a piece of mail as proof of residence.", p: "405-794-0603", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "Little Axe Community Center", a: "1000 168th Ave NE", d: "Mondays at 9:00 until the food is gone. For residents of the Little Axe School District.", p: "405-292-9770", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "Noble Senior Center", a: "600 E. Maguire Rd", d: "Congregate lunch pick-up M–F 11:30–12:00. $3 suggested donation for 60+. 24-hour reservation required.", p: "405-312-9705", cats: ["food", "seniors"], g: "East Norman, Noble & Lexington" },
  { n: "Noble All Volunteer Pantry", a: "2nd St., Noble", d: "Self-serve, open 24/7. North of the police station, near the alley by the Methodist church.", cats: ["food"], g: "East Norman, Noble & Lexington" },
  { n: "12 Corners Baptist Church", a: "156th and Etowah Road", d: "Call for information. ID required. Noble and surrounding area residents only.", p: "405-312-1442", cats: ["food"], g: "East Norman, Noble & Lexington" },

  /* ---------- FOOD: MOORE & SOUTH OKC ---------- */
  { n: "Food & Resource Center (Moore)", a: "2635 N. Shields Blvd", d: "Mon 12:30–5:30, Wed–Fri 10–3, 3rd Sat 9:30–11:30. Requirements and service zip codes online.", p: "405-600-3182", w: "rfbo.org/frc", cats: ["food"], g: "Moore & south OKC" },
  { n: "First Baptist of Moore", a: "301 NE 27th at I-35", d: "Mondays 10–1 and 5:30–7:00, once a month. Qualifying zip codes listed online.", p: "405-793-2600", w: "firstmoore.com", cats: ["food"], g: "Moore & south OKC" },
  { n: "Fresh Start Community Church", a: "309 N. Eastern", d: "3rd Thursday, 5–6. Residents of Moore. Photo ID required.", p: "405-794-7313", w: "freshstartok.com", cats: ["food"], g: "Moore & south OKC" },
  { n: "Highland Baptist", a: "2425 SE 4th", d: "1st and 3rd Tuesdays 6:30–7:30, and every Thursday 9–12. Photo ID required. 60-day limit.", p: "405-794-5432", w: "hbcmoore.org", cats: ["food"], g: "Moore & south OKC" },
  { n: "Moore First UMC", a: "201 W. Main (NE entrance)", d: "Wed 3–5:00, Sun 1:30–3:00. Call for information or to set up an appointment after hours.", p: "405-794-6671", cats: ["food"], g: "Moore & south OKC" },
  { n: "The Brand Senior Center in Moore", a: "501 E. Main", d: "Aging Services provides senior lunches for a suggested donation of $3.00. 24-hour reservation required.", p: "405-793-9069", cats: ["food", "seniors"], g: "Moore & south OKC" },
  { n: "Regency Park Church Care Closet", a: "2001 N. Janeway", d: "Wed 10–4. Serving low-income residents in zip codes 73160 and 73139. Limit once a month.", p: "405-794-3507", w: "regencypark.church", cats: ["food"], g: "Moore & south OKC" },
  { n: "St. Andrews \"Pac a Sac\"", a: "800 NW 5th, Moore", d: "Every Tues and Fri 10–noon. Utility bill and photo ID required. 30-day limit. Moore School District residents only.", p: "405-799-3334", cats: ["food"], g: "Moore & south OKC" },

  /* ---------- SHELTER ---------- */
  { n: "Norman Night Shelter (City Care)", a: "109 W. Gray", d: "Check in at 5:00 to reserve a bed. Call for more information on reservation protocol.", p: "405-724-8439", cats: ["shelter"] },
  { n: "Bridges", a: "1670 Stubbeman", d: "Provides qualifying high school students with housing and basic services so they can graduate.", p: "405-579-9280", cats: ["shelter", "children"] },
  { n: "Food and Shelter for Friends", a: "201 Reed", d: "Call for information, Monday–Friday 8–4.", p: "405-360-4954", cats: ["shelter", "food"] },
  { n: "Habitat for Humanity", d: "Builds affordable homes and wheelchair ramps, and does repairs and yard clean-up. See the website for details.", p: "405-366-2813", w: "roserockhabitat.org", cats: ["shelter", "general"] },
  { n: "Norman Housing Authority", a: "700 N. Berry Rd", d: "Housing and rental assistance for low-income families, and for elderly and disabled residents.", p: "405-329-0933", w: "normanha.org", cats: ["shelter"] },
  { n: "Salvation Army shelter", a: "318 E. Hayes", d: "As space permits, 60-day limit. Valid ID, one bag limit. Extra cold cots for women when it is below 32°.", p: "405-364-9910", cats: ["shelter"] },
  { n: "The Mission — family housing", a: "2525 E. Lindsey", d: "Housing for homeless families with children. Call or come by for an application.", p: "405-321-8880", cats: ["shelter"] },
  { n: "Transition House", a: "700 Asp Ave. #2", d: "Transitional living program for adults with mental illness.", p: "405-360-7926", w: "thouse.org", cats: ["shelter", "mental"] },
  { n: "Women's Sanctuary Day Shelter", a: "425 Tonhawa", d: "Women and children, M–F 8:30–4:00. Showers, laundry, computers, a children's play area, GED and case management help.", p: "405-701-8293", cats: ["shelter", "general"] },

  /* ---------- MONEY: RENT & UTILITIES ---------- */
  { n: "Alameda Church of Christ — utilities", a: "801 E. Alameda", d: "Requires a cut-off notice. Call Monday at 8:30 a.m. for a Wednesday appointment. Once a year, three times maximum.", p: "405-321-0788", cats: ["money"], g: "Rent & utilities" },
  { n: "Catholic Charities — utilities", a: "1232 N. Classen, OKC", d: "Six online applications accepted on Mondays at 8:30 a.m.", p: "405-523-3000", w: "catholiccharities.org/emergency-rent-utility-assistance", cats: ["money"], g: "Rent & utilities" },
  { n: "Community Action (COCAA), Moore", a: "224 S. Chestnut Ave", d: "Low-income family utility assistance up to $150 (OG&E). Rental assistance when funds are available.", p: "405-434-6100", w: "cocaa.org", cats: ["money"], g: "Rent & utilities" },
  { n: "Sanctuary Women's Day Shelter", a: "425 E. Tonhawa", d: "Support for women, including rental and electric deposits. Call for information.", p: "405-701-8293", cats: ["money"], g: "Rent & utilities" },
  { n: "Food and Shelter — rent", a: "201 Reed", d: "Call for information and availability, M–F 8–4. Proof of income and an eviction notice are required.", p: "405-360-4954", cats: ["money"], g: "Rent & utilities" },
  { n: "Lifespring — rent and utilities", a: "600 W. Tecumseh", d: "1st Saturday 10–11. Up to $100 rent or $75 utility assistance. Bring a cut-off notice or letter from your landlord. Photo ID required.", p: "405-292-7770", w: "lifespringnorman.com", cats: ["money"], g: "Rent & utilities" },
  { n: "LIHEAP — home energy assistance", d: "Winter heating and summer cooling funding for eligible low-income households.", e: "LIHEAP2@okdhs.org", cats: ["money"], g: "Rent & utilities" },
  { n: "LIHWAP — water assistance", d: "Water bill assistance through DHS. Enter your zip code online to apply.", p: "405-522-5050", cats: ["money"], g: "Rent & utilities" },
  { n: "McFarlin Memorial UMC — utilities", a: "419 S. University, SE entrance", d: "Gas, water and electric. Bills required. Norman, Noble and Little Axe residents only. Thursdays, register at 8:00.", p: "405-321-3484", cats: ["money"], g: "Rent & utilities" },
  { n: "The Mission — utilities or rent", a: "2525 E. Lindsey", d: "Mon–Wed 10–2 (closed 11–12), Thurs 2–5:00, Fri 10–12. Will pay the last $25 of a bill. Once a year.", p: "405-321-8880", cats: ["money"], g: "Rent & utilities" },
  { n: "St. Vincent de Paul at St. Andrew", d: "Utility and other assistance, Moore school district only. Call and leave a message.", p: "405-799-3334", cats: ["money"], g: "Rent & utilities" },
  { n: "St. Vincent de Paul at St. Joseph", d: "Rent and utility assistance for the Norman and Noble area. Call for an appointment. Once a year.", p: "405-701-3693", cats: ["money"], g: "Rent & utilities" },
  { n: "St. Vincent de Paul at St. Mark's", d: "Utility assistance for Norman and Blanchard zip codes. Call and leave a message.", p: "405-366-8070", cats: ["money"], g: "Rent & utilities" },
  { n: "St. Vincent de Paul at St. Thomas More", d: "Rent and utility assistance for the Norman and Noble area. Call and leave a message. Once every 12 months.", p: "405-329-5372", cats: ["money"], g: "Rent & utilities" },
  { n: "St. Vincent de Paul at Our Lady of Victory", d: "Utility assistance for the Purcell and Lexington area only. Call and leave a message.", p: "405-595-1087", cats: ["money"], g: "Rent & utilities" },
  { n: "Salvation Army — utilities", a: "1124 N. Porter", d: "Call any time to see if you qualify and to set up an appointment. Once per year.", p: "405-364-9910", cats: ["money"], g: "Rent & utilities" },
  { n: "Women's Sanctuary (Catholic Charities)", a: "425 E. Tonhawa", d: "Assists women with a rent or electric deposit, up to $300. Call for information.", p: "405-701-8293", cats: ["money"], g: "Rent & utilities" },

  /* ---------- MONEY: TAX HELP ---------- */
  { n: "The Well", a: "210 James Garner Ave", d: "Tuesday evenings 5–8 p.m. during tax season (Feb 3–April 11). No appointment necessary.", cats: ["money"], g: "Free tax help (VITA)" },
  { n: "12th Ave Rec Center", a: "1701 12th Ave NE", d: "Tues–Fri mornings 8:30–12:45 during tax season (Feb 4–April 11). Appointment necessary.", p: "405-292-7275", cats: ["money"], g: "Free tax help (VITA)" },
  { n: "VITA at the Community Services Building", a: "1183 E. Main", d: "By appointment only on select dates in February, March and April, between 9 and 3. Book online.", w: "unitedwaynorman.org", cats: ["money"], g: "Free tax help (VITA)" },

  /* ---------- HEALTH ---------- */
  { n: "Blanchard Healing Hands Community Clinic", a: "600 N. Main, Blanchard", d: "Free primary care for people without insurance, 3rd Thursday 6–9 p.m. Prescriptions filled on site.", p: "405-673-6374", cats: ["health"] },
  { n: "Cleveland County Health Department", a: "250 12th Ave NE", d: "M–Th 8–11 and 1–4, Fri 8–11. STD testing, family planning and immunizations by appointment.", p: "405-321-4048", cats: ["health"] },
  { n: "The Eden Clinic", a: "1125 N. Porter, Ste 200", d: "Free pregnancy tests and ultrasound to confirm pregnancy. STI testing and treatment for women and men.", p: "405-579-4673", w: "theedenclinic.com", cats: ["health"] },
  { n: "Hope Pregnancy Center", d: "A safe, confidential place to explore your options without judgement. Pregnancy tests.", p: "405-688-8700", w: "thinkimpregnant.org", cats: ["health"] },
  { n: "J.D. McCarty Center", a: "2002 E. Robinson", d: "Therapy and medical care for children ages 0–21 with developmental disabilities.", p: "405-307-2800", w: "jdmc.org", cats: ["health", "children"] },
  { n: "Moore Faith Medical Clinic", d: "Free clinic Thursdays 6–8:30 for the uninsured. No drop-ins. Call and leave a message for an appointment.", p: "405-759-0853", cats: ["health"] },
  { n: "Oklahoma ABLE Tech", d: "Helps seniors and people with disabilities get medical equipment and assistive technology.", p: "800-257-1705", w: "okabletech.org", cats: ["health", "seniors"] },
  { n: "The Mission — prescriptions", a: "2525 E. Lindsey", d: "Up to $25 toward non-narcotic prescriptions. Staff will call the pharmacy to verify. Once a year.", p: "405-321-8880", cats: ["health"] },
  { n: "Variety Care Family Medicine", a: "317 E. Himes", d: "M–F 8–5, medical care for men, women and children by appointment. Behavioral health M–Th 8–5.", p: "405-632-6688", w: "varietycare.org", cats: ["health"] },
  { n: "Variety Care — Alameda", a: "1237 Alameda", d: "M–F 8–5. Medical care and behavioral health for children up to 18, women's healthcare, pregnancy tests. Dental care in OKC with free transportation. Accepts SoonerCare, Medicare and self-pay on a sliding scale.", p: "405-632-6688", w: "varietycare.org", cats: ["health", "children"] },
  { n: "Women's Resource Center", d: "Confidential support. Rape Crisis Hotline: 405-701-5660.", p: "405-701-5550", p2: { label: "Rape Crisis Hotline", num: "405-701-5660" }, w: "wrcnormanok.org", cats: ["health", "general"] },

  /* ---------- MENTAL HEALTH & RECOVERY ---------- */
  { n: "A Better Way", d: "Boots-on-the-ground help for people who are homeless or living with mental illness, connecting them to case management and employment.", p: "405-768-5572", w: "mhaok.org/ABW", cats: ["mental"] },
  { n: "Celebrate Recovery at Alameda Church of Christ", a: "801 E. Alameda", d: "Find freedom from life's hurts, hang-ups and habits. Meets Tuesday evenings at 6:30. Call for more information.", p: "405-321-0788", w: "alameda.church/connect/celebrate-recovery", cats: ["mental"] },
  { n: "Alzheimer's Support Group", a: "419 S. University", d: "Luncheon on the 3rd Wednesday in Room 209 at McFarlin Memorial UMC. RSVP one week in advance to 405-321-3484, ext. 115.", p: "405-321-3484", cats: ["mental", "seniors"] },
  { n: "Central Oklahoma Community Mental Health Center — adults", a: "909 E. Alameda", d: "Adult outpatient services for McClain and Cleveland counties. Adult crisis line: 405-613-1122.", p: "405-360-5100", p2: { label: "Adult crisis", num: "405-613-1122" }, cats: ["mental"] },
  { n: "Central Oklahoma Community Mental Health Center — children", a: "1120 E. Main", d: "Outpatient services for children 18 and under, and their families. Crisis hotline for 18 and under: 405-397-4929.", p: "405-573-3812", p2: { label: "Youth crisis", num: "405-397-4929" }, cats: ["mental", "children"] },
  { n: "Children's Recovery Center", a: "320 12th Ave NE", d: "Inpatient psychiatric care for ages 12–17 with mental health issues.", p: "405-573-3842", cats: ["mental", "children"] },
  { n: "Community Works", a: "805 E. Robinson", d: "A behavioral health and addiction agency providing outpatient counseling.", p: "405-447-4499", w: "cworksok.com", cats: ["mental"] },
  { n: "Depression and Bipolar Support", d: "Support group meets at St. Stephen's Methodist Church, Thursdays at 7:00. Call Diane at 405-503-1948 to confirm.", p: "405-503-1948", w: "dbsaok.org", cats: ["mental"] },
  { n: "The Eden Clinic — after an abortion", d: "Confidential, non-judgemental support for those facing difficulty after an abortion. Call or text.", p: "405-579-4673", cats: ["mental"] },
  { n: "Celebrate Recovery at Fresh Start Community Church", a: "309 N. Eastern", d: "12-step program. Large group Tuesdays at 6:30, share groups at 7:30. Call for information.", p: "405-794-7313", cats: ["mental"] },
  { n: "Gratitude in Action (AA)", a: "211 W. Comanche", d: "12-step AA meeting at First Baptist Church in Norman. Call for more information.", p: "405-655-7900", cats: ["mental"] },
  { n: "Green Shoe Foundation", d: "Five-day retreats for adults carrying co-dependency from childhood trauma.", p: "405-697-2109", cats: ["mental"] },
  { n: "Griffin Memorial Hospital", a: "900 E. Main", d: "Inpatient psychiatric care for adults with mental health or substance abuse issues. No insurance required.", p: "405-573-6623", cats: ["mental"] },
  { n: "NAMI — National Alliance on Mental Illness", d: "Call or text for information about the Norman group.", p: "405-408-0984", e: "naminormanok@gmail.com", w: "NAMIoklahoma.org", cats: ["mental"] },
  { n: "Red Rock Outpatient Services", a: "900 N. Porter #110", d: "Outpatient psychiatric crisis center for adults and children, M–Th 8–5, Fri 8–4.", p: "405-424-7711", cats: ["mental"] },
  { n: "Red Rock Crisis Unit", a: "900 E. Main St., Bldg 52", d: "Adult inpatient services, open 24/7. Crisis hotline: 405-987-7625.", p: "405-307-4811", p2: { label: "Crisis hotline", num: "405-987-7625" }, w: "red-rock.com/resources", cats: ["mental"] },
  { n: "Restore Behavioral Health", a: "1008 24th Ave NW", d: "A safe place to find help, hope and healing. Low-cost options available.", p: "405-310-3262", w: "restore-bh.com", cats: ["mental"] },
  { n: "Shred the Stigma", d: "Addresses accidental overdoses and other drug-related harm through realistic, achievable approaches.", p: "405-295-5167", w: "SHREDtheStigmaOK.org", cats: ["mental"] },
  { n: "Thunderbird Clubhouse", a: "1251 Triad Village Dr", d: "Clubhouse for adults recovering from mental illness. Referral required.", e: "referrals@thunderbirdclubhouse.org", cats: ["mental"] },
  { n: "Tribal Opioid Response Grant", a: "15951 Little Axe Dr", d: "Free Narcan and fentanyl test strips for the general public. Treatment and recovery services for citizens of a federally recognized tribe living in Cleveland, Oklahoma, Pottawatomie, Lincoln or Logan county.", e: "TOR@astribe.com", w: "asthealth.org", cats: ["mental"] },
  { n: "The Virtue Center", a: "2457 Wilcox Dr", d: "Walk-ins welcome M–Th 8–6, Fri 8–12 for counseling, substance abuse, gambling addiction. Mental health for adults, teens and families. Naloxone distributor.", p: "405-321-0022", w: "thevirtuecenter.org", cats: ["mental"] },
  { n: "Wildwood Caregivers Support Group", a: "1501 24th Ave NE", d: "Meets at Wildwood Church in Norman. Call for meeting times and more information.", p: "405-329-3939", cats: ["mental", "seniors"] },

  /* ---------- CHILDREN & PARENTS ---------- */
  { n: "A Brighter Day", a: "800 W. Rock Creek #115", d: "Free diapers, wipes and baby supplies for ages 0–36 months, each week. Registration required. Call or text.", p: "405-968-3343", cats: ["children"] },
  { n: "Abbott Children's House", a: "231 E. Symmes", d: "Coordinated investigation and intervention services for child abuse victims.", p: "405-579-5800", w: "abbott-house.org", cats: ["children"] },
  { n: "Alameda Church of Christ Baby Pantry", a: "801 E. Alameda", d: "Wed 10–12, 4th Thurs 5–6:30, 2nd Sat 9–11. Photo ID. Cleveland and McClain County residents.", p: "405-321-0788", cats: ["children"] },
  { n: "Baby Steps", a: "941 Nebraska", d: "Childcare, counseling and parenting classes for teen parents at Norman Public Schools.", p: "405-360-2717", cats: ["children"] },
  { n: "Bethesda", a: "1181 E. Main", d: "M–Th 8–6, Fri 8–12. Psychotherapeutic counseling and treatment for sexually abused children ages 3–18, plus an education program.", p: "405-364-0333", w: "bethesdaok.org", cats: ["children"] },
  { n: "Big Brothers Big Sisters", a: "502 E. Main", d: "M–F 8:30–5:00. Children ages 6–15 matched with a mentor.", p: "405-364-3722", w: "bigoklahoma.org", cats: ["children"] },
  { n: "Boys and Girls Club (CCFI)", d: "Enrichment for Norman Public Schools students ages 6 and up, M–F 3:00–7:00 (8–5 during summer programs).", p: "405-364-1420", w: "ccfinorman.org", cats: ["children"] },
  { n: "CASA — South Central", a: "401 W. Main, Ste 440", d: "Court-appointed advocates for abused and neglected children in the court system. Must be in DHS custody.", p: "405-360-5295", w: "southcentralcasa.org", cats: ["children"] },
  { n: "Center for Children and Families", a: "210 S. Cockrel", d: "Baby pantry M–F 8–5 (two-week limit), teen and new parent classes, divorce and co-parenting services, counseling.", p: "405-364-1420", cats: ["children"] },
  { n: "Community Action, Moore — diapers", a: "224 S. Chestnut, Ste 100", d: "Diaper assistance for eligible families. Apply through the county office; ask for Carol.", p: "405-827-6959", w: "cocaa.org", cats: ["children"] },
  { n: "Cleveland County Health Department — children", a: "250 12th Ave NE", d: "M–Th 8–4, Fri 8–11 by appointment: STD, family planning, WIC, car seats, child health, immunizations, head lice.", p: "405-321-4048", cats: ["children", "health"] },
  { n: "SoonerStart (birth to 3)", a: "250 12th Ave NE", d: "Early intervention for developmental delays. Children First for first-time moms — referrals must be made before 29 weeks.", p: "405-321-4048", cats: ["children"] },
  { n: "Child Guidance Program (birth to 12)", d: "Behavioral health, child development, hearing and speech-language pathology screenings and treatment.", p: "405-321-4048", cats: ["children"] },
  { n: "Crossroads Youth & Family Center", a: "1650 Tecumseh, Ste 500", d: "Counseling and an emergency youth shelter.", p: "405-321-0240", w: "crossroadsyfs.org", cats: ["children", "shelter"] },
  { n: "Cleveland County DHS", a: "303 E. Comanche / 631 E. Robinson", d: "Adult and family services. Apply online, in person or by phone. SNAP applications: 405-487-5483. EBT cards available 8:30–4:30.", p: "405-522-5050", p2: { label: "SNAP", num: "405-487-5483" }, w: "okdhslive.org", cats: ["children", "general", "food"] },
  { n: "Early Birds", d: "A free program helping caregivers of children 0–5, and pregnant moms, learn about child development and school readiness.", w: "sunbeamfamilyservices.org/earlybirds/", cats: ["children"] },
  { n: "Eden Clinic — parenting", d: "Birth preparation, parenting support for moms and dads, and baby supplies. Call or text.", p: "405-579-4673", cats: ["children"] },
  { n: "Fostering Futures", d: "Serving children involved with the OKDHS child welfare system in Cleveland, McClain and Garvin counties.", p: "405-579-5000", w: "fosteringfuturesok.org", cats: ["children"] },
  { n: "Family Expectations", d: "A free program to help parents prepare for a new baby and strengthen the relationship between partners.", p: "405-639-2054", w: "familyexpectations.com", cats: ["children"] },
  { n: "Head Start", a: "1333 W. Main", d: "School readiness for ages six weeks to four years, and daycare for special needs.", p: "405-292-6440", w: "headstartprogram.us/city/ok-norman", cats: ["children"] },
  { n: "Infant Crisis Center — Baby Mobile", a: "4224 N. Lincoln Blvd, OKC", d: "See the website for the Baby Mobile schedule in Norman.", p: "405-528-3663", w: "infantcrisis.org/get-help/babymobile/", cats: ["children"] },
  { n: "Kaleidoscope Grief Support", d: "Free support for children ages 3–18 and families grieving the death of a loved one.", p: "405-306-0052", w: "kaleidescopegriefsupport.com", cats: ["children", "mental"] },
  { n: "Loveworks Leadership", a: "219 E. Gray", d: "Free after-school opportunities and events for middle schoolers, building leadership, social and life skills.", p: "405-566-0316", w: "loveworksleadership.org", cats: ["children"] },
  { n: "Oklahoma ABLE Tech — infants and toddlers", d: "Partners with SoonerStart to provide assistive technology for infants and toddlers with disabilities.", w: "okabletech.org", cats: ["children"] },
  { n: "Oklahoma Baptist Homes for Children", d: "Child-focused care for ages 6–18 coming from hurting families — divorce, drug abuse, incarceration, sickness.", w: "obhc.org/children", cats: ["children"] },
  { n: "Operation School Bell", d: "New clothes and shoes for K–12 students in Norman Public Schools and Little Axe Schools. Contact your school counselor.", cats: ["children", "clothing"] },
  { n: "Open Heart Resource Room", d: "Delivers items to children in out-of-home care. Referral from an agency, minister or DHS required.", p: "405-329-8041", e: "OpenHeartResourceRoom@gmail.com", cats: ["children"] },
  { n: "Safe Families Oklahoma", d: "Supports families in crisis by hosting children temporarily while a parent or guardian is unavailable.", p: "405-418-3825", w: "SafeFamiliesOK.org", cats: ["children"] },
  { n: "SafeCare", a: "4436 NW 50th, OKC", d: "A free home-visiting program with weekly support and education for parents of at least one child age 0–5.", p: "405-858-2725", cats: ["children"] },
  { n: "Sooner Success", d: "Support for families raising a child with special needs, connecting them to resources.", p: "405-651-7809", w: "soonersuccess.ouhsc.edu", cats: ["children"] },
  { n: "Sox of Love", d: "Clean laundry, new socks and meals for neighbors. Follow on Facebook @soxoflove.", p: "405-494-0005", e: "soxoflove@gmail.com", cats: ["children", "clothing"] },
  { n: "Sunhive Collective", a: "5201 NE 24th", d: "Support and education for young adults with disabilities on the path to independence.", w: "sunhivecollective.com", cats: ["children"] },
  { n: "TRUE Dads", a: "3 E. Main, OKC", d: "For dads and co-parents: working better together, building relationships, and finding a better job.", p: "405-418-3888", w: "TRUEDads.com", cats: ["children"] },

  /* ---------- CLOTHING & LAUNDRY ---------- */
  { n: "Laundry Love (Sox of Love)", d: "Free laundry at Sooner Wash once a month. Contact for the date and details.", p: "405-362-6052", e: "soxoflove@gmail.com", w: "soxoflove.com", cats: ["clothing"] },
  { n: "Adventist Community Services", a: "1818 E. Alameda", d: "3rd, 4th and 5th Tuesdays, 9–12. Current ID and proof of Cleveland County residence. Three times a year.", p: "405-366-7772", cats: ["clothing"] },
  { n: "Noble Church of Christ Clothing House", a: "111 N. Main", d: "Clothes, bedding, shoes and more. 1st and 3rd Fridays, 8–10. Call for information.", p: "405-505-1598", cats: ["clothing"] },
  { n: "Crosspointe Church", a: "2601 SE 24th", d: "Fridays 8:30–11 in the Crosspointe Care Center. Picture ID required. Five to six week limit.", p: "405-329-0823", cats: ["clothing"] },
  { n: "First Baptist of Norman", a: "211 W. Comanche", d: "By appointment on 2nd and 4th Fridays. You can also request during office hours. Cleveland County residents only.", p: "405-321-1753", cats: ["clothing"] },
  { n: "First Presbyterian Thrift Shop", a: "404 Toberman", d: "Thursdays 9–4, except holidays and school closings. Minimal cost. Emergency vouchers 1–2:30.", p: "405-321-0933", cats: ["clothing"] },
  { n: "Outreach Thrift", a: "621 12th Ave NE", d: "Accepts referral vouchers from agencies for free clothing. M–F 10–6, Sat 10–7, Sun 12–6.", p: "405-928-2072", cats: ["clothing"] },
  { n: "Salvation Army — clothing vouchers", a: "1124 N. Porter", d: "Clothing voucher for people who are unhoused, any day except Wednesday. ID and proof of homelessness required.", p: "405-364-9910", cats: ["clothing"] },
  { n: "St. Joseph's Catholic Thrift Store", a: "211 N. Porter", d: "Wednesdays 9–1. Minimal cost, free if you can't afford it. Once a month.", p: "405-701-3693", cats: ["clothing"] },

  /* ---------- SENIORS & VETERANS ---------- */
  { n: "Aging Services", a: "2227 W. Lindsey, Suite 1213", d: "Special financial assistance, food pantry, caregiver respite, help for grandparents raising grandchildren, housekeeping, vouchers, transportation, and medical supply lending — wheelchairs, walkers, shower chairs, canes, pull-ups.", p: "405-321-3200", w: "agingservicesok.org", cats: ["seniors"] },
  { n: "Caring Assistance Line", d: "Statewide assistance line for aging and disability resources: caregiving, in-home assistance, legal and Medicare information.", p: "800-211-2116", w: "okcares.org", cats: ["seniors"] },
  { n: "Dale K. Graham Veterans Foundation", a: "1233 W. Lindsey", d: "Accredited foundation serving veterans and families through the VA claims process.", p: "405-550-8806", w: "DKGVF.ORG", cats: ["seniors"] },
  { n: "Full Circle Adult Day Services", a: "4223 28th Ave NW", d: "M–F 7:30–5:30. Caregiver support group meets the 1st Tuesday at the Community Services Building, first floor.", p: "405-447-2955", w: "fullcircleok.org", cats: ["seniors"] },
  { n: "Envision Success 4 Veterans", a: "315 W. Main", d: "Accredited veteran service officers assist veterans and families with resources, claims and benefits at no cost.", p: "405-701-2015", cats: ["seniors"] },
  { n: "Force 50 Foundation", d: "Grant funding to partner veteran organizations and emergency aid to veterans in crisis.", w: "force50foundation.com", cats: ["seniors"] },
  { n: "Grandparent Toolkit", d: "Resources on nutrition, mental health, infant health and safety, respite care and discipline.", w: "oklahoma.gov/health/GrandparentToolkit", cats: ["seniors", "children"] },
  { n: "Supportive Services for Veteran Families (SSVF)", d: "Statewide housing assistance for eligible veterans.", p: "405-724-3360", w: "OKVetUnited.org", cats: ["seniors", "shelter"] },
  { n: "The Hugs Project", d: "Care packages and support for Americans serving in the armed forces.", p: "405-651-8359", w: "TheHugsProject.com", cats: ["seniors"] },
  { n: "Veteran's Corner", a: "3805 SE 44th, Newcastle", d: "Open Tues and Thurs 8–12. Small food closet and some rent and utility assistance. Call for information.", p: "405-387-5070", cats: ["seniors", "money", "food"] },
  { n: "Cleveland County Veterans Service Coordinator", a: "210 S. James Garner", d: "Provides avenues to claim benefits from county, state and federal agencies.", p: "405-366-0673", p2: { label: "Cell", num: "405-593-5365" }, cats: ["seniors"] },

  /* ---------- TRANSPORTATION ---------- */
  { n: "Care-A-Vans", d: "Free transportation for Norman's unhoused neighbors, M–F 8–5, subject to volunteer availability. Meal delivery Mon–Thurs evenings, and weekend and holiday shuttles between shelters. Text to arrange.", p: "405-532-6436", w: "normancareavans.org", cats: ["transport"] },
  { n: "Crosspoint CARs Ministry", a: "2601 SE 24th", d: "Minor car repairs by appointment only. You must apply online first.", p: "405-329-0823", cats: ["transport"] },
  { n: "First Baptist Church — bicycles", a: "211 W. Comanche", d: "For Cleveland County residents. Photo ID required. Call for an appointment.", p: "405-321-1753", cats: ["transport"] },
  { n: "Kiwanis Cruiser (Aging Services)", d: "Ages 60 and up, or under 60 with a disability. Suggested donation $2.50 one way, $5 round trip. M–F 8:30–10:30 and 1–3. Walmart Wednesdays — please reserve two weeks ahead.", p: "405-321-3200", w: "agingservicesok.org", cats: ["transport", "seniors"] },
  { n: "Lifespring — gas cards", a: "600 W. Tecumseh", d: "1st Saturday 10:00–11:00. Limited number of $25 gas cards. Driver's license and photo ID required.", p: "405-292-7770", w: "lifespringnorman.com", cats: ["transport"] },
  { n: "Norman EMBARK", d: "Free bus service M–F 7 a.m.–10 p.m., Sat 10–7. Closed Sundays and major holidays. Download the EMBARK app or see the website.", p: "405-235-7433", w: "embarkok.com/norman", cats: ["transport"] },
  { n: "EMBARK Plus", d: "Curb-to-curb transit for elderly and disabled riders within OKC limits. Book 1–7 days in advance. TTY users dial 711 to reserve.", p: "405-235-7587", cats: ["transport", "seniors"] },
  { n: "Norman On-Demand", d: "Transit service for late nights and Sundays in core Norman. See the city website for times and pricing.", w: "normanok.gov/residents-visitors/transit-parking/norman-demand", cats: ["transport"] },
  { n: "OU late-night rides", d: "Sign up with an OU email address for free and safe rides Thursday, Friday and Saturday, 10 p.m.–3:00 a.m.", cats: ["transport"] },
  { n: "SoonerRide", d: "Medicaid number required. Call 7 a.m.–8 p.m. Mon–Sat, three days ahead, or book online for medical appointments.", p: "877-404-4500", w: "member.logisticare.com", cats: ["transport"] },
  { n: "Modivcare — non-emergency medical rides", d: "SoonerCare and SoonerSelect plans offer transportation as an added benefit. Call your plan's number or use the Modivcare app. Aetna Better Health 877-718-4208, Humana Healthy Horizons 877-718-4213, Oklahoma Complete Health 877-718-4212, SoonerCare 877-404-4500.", p: "877-404-4500", cats: ["transport", "health"] },
  { n: "The Mission — gas vouchers", a: "2525 E. Lindsey", d: "Gas vouchers for a doctor's appointment or job interview only. ID and appointment verification required.", p: "405-321-8880", cats: ["transport"] },

  /* ---------- PETS ---------- */
  { n: "St. Francis Animal Resource Center", d: "Pet food, supplies and connections to vet services so people can keep their pets. Low-cost and free spay and neuter listings on their site.", p: "405-367-5862", w: "stfrancisarc.org", cats: ["pets"] },
  { n: "Norman Animal Welfare", d: "City animal shelter, adoptions and fee information.", p: "405-292-9736", w: "normanok.gov/residents-visitors/animal-welfare/fees", cats: ["pets"] },

  /* ---------- GENERAL ASSISTANCE ---------- */
  { n: "Ability Connection Oklahoma", d: "Serves children and adults with disabilities, including cerebral palsy, to advance independence and productivity.", p: "405-759-3562", e: "okc@acok.org", cats: ["general"] },
  { n: "ABLE", a: "300 N. Crawford", d: "Group homes and employment for people with developmental disabilities. M–F 8–4.", p: "405-329-3922", cats: ["general"] },
  { n: "Alameda Church of Christ — ID replacement", a: "801 E. Alameda", d: "Help replacing a state ID, driver's license or birth certificate, during food pantry hours.", p: "405-321-0788", cats: ["general"] },
  { n: "Among Friends", a: "1185 E. Main", d: "A day activity center for adults with special or additional needs. Facebook: @AmongFriendsOK.", p: "405-361-5529", cats: ["general"] },
  { n: "DivorceCare", a: "1500 E. Imhoff Rd", d: "In-person and online groups meet at various churches in the Norman area. See the website for details.", w: "DivorceCare.org", cats: ["general"] },
  { n: "DUI and ADSAC Services", a: "2457 Wilcox Dr", d: "Assessments and information on DUI school through the Virtue Center in Norman.", p: "405-321-0022", w: "thevirtuecenter.org", cats: ["general"] },
  { n: "Norman Habitat ReStore", a: "831 Sonoma Park Dr.", d: "New and used building supplies, furniture and appliances at a discount. Takes referrals from case workers.", p: "405-360-7868", cats: ["general"] },
  { n: "Rose Rock Habitat", d: "Wheelchair ramps, emergency home repair, yard clean-up and code violation assistance.", p: "405-366-2813", w: "roserockhabitat.org", cats: ["general", "shelter"] },
  { n: "HUGS Street Ministry", d: "Mobile trailer with showers, help with IDs and birth certificates, clothing and a hot meal for unsheltered neighbors.", p: "405-684-0025", w: "facebook.com/hugsstreetministry", cats: ["general", "clothing"] },
  { n: "The Dragonfly Home", d: "Resource for victims of human trafficking. 24-hour helpline, toll-free 855-674-4767 or OKC 405-212-3377.", p: "855-674-4767", p2: { label: "OKC", num: "405-212-3377" }, w: "thedragonflyhome.org", cats: ["general"] },
  { n: "Legal Aid Oklahoma", a: "2227 W. Lindsey, Suite 1550", d: "Free legal services in civil matters — eviction notices, bankruptcy, custody and more. Not criminal cases.", p: "405-360-6631", w: "LegalAidOK.org", cats: ["general"] },
  { n: "OU Legal Clinic", a: "300 W. Timberdell Rd", d: "Pro-bono civil and criminal representation for low-income residents of Cleveland and McClain counties.", p: "405-325-3702", e: "legalclinic@ou.edu", cats: ["general"] },
  { n: "Oklahoma Indigent Defense System (OIDS)", a: "111 N. Peters, Ste 500", d: "Court-appointed public defenders and criminal trial attorneys for Cleveland, McClain and Garvin counties.", p: "405-801-2636", w: "ok.gov/OIDS", cats: ["general"] },
  { n: "PFLAG Norman", d: "Support and advocacy for LGBTQIA2S+ people and their families. Meets the 2nd Thursday at 7:00 at the East Side Library.", p: "405-360-4497", w: "pflagnorman.org", cats: ["general"] },
  { n: "Planned Parenthood", a: "619 NW 23rd, OKC", d: "Pregnancy testing, HIV testing and counseling, contraceptive services.", p: "405-528-2157", w: "plannedparenthood.org", cats: ["general", "health"] },
  { n: "RAIN Oklahoma", a: "3800 N. Classen, Ste 200, OKC", d: "HIV case management, M–F 8:30–4:30.", p: "405-232-2437", w: "rainoklahoma.org", cats: ["general", "health"] },
  { n: "Red Dirt Collective", d: "Works in solidarity with poor and working-class neighbors. Community gardens and mutual aid fairs.", e: "rdc.normanok@gmail.com", cats: ["general"] },
  { n: "Salvation Army — ID assistance", a: "1124 N. Porter", d: "Thursdays 9–noon. Proof of homelessness required. No birth certificate assistance.", p: "405-364-9910", cats: ["general"] },
  { n: "Social Security Administration", a: "200 NE 27th, Moore", d: "Mon, Tues, Thurs, Fri 9–3; Wed 9–12. Information, help and services handled by the SSA.", p: "866-964-4260", w: "ssa.gov", cats: ["general", "seniors"] },
  { n: "Women's Resource Center", d: "If you are in danger or need to talk, the Domestic Violence Crisis Hotline is 405-701-5540.", p: "405-364-9424", p2: { label: "DV crisis line", num: "405-701-5540" }, w: "wrcnormanok.org", cats: ["general"] },
  { n: "Workforce Innovation and Opportunity Act (WIOA)", a: "103 W. Acres", d: "Free statewide job-matching and labor market information.", p: "405-701-2681", w: "Okjobmatch.com", cats: ["general"] }
];
