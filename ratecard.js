/**
 * Winpath Diagnostics - Complete Rate Card Dataset (100+ Tests)
 * This file acts as the database for the search engine in index.html.
 * Ensure this file is saved in the same directory as index.html.
 */

const rateCard = [
    // Hematology & Basic Screens
    { name: "Peripheral Smear Examination (PBS), EDTA Blood", price: "350.00", desc: "Detailed microscopic analysis of blood cells to detect morphological abnormalities.", params: "RBC morphology, WBC differential, Platelet estimate, Parasites (Malaria/Filaria)" },
    { name: "CBC Haemogram (Complete Blood Count)", price: "400.00", desc: "Comprehensive blood profiling used as a primary diagnostic tool for various conditions.", params: "Hb, WBC, RBC, Platelets, PCV, MCV, MCH, MCHC, RDW, Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils" },
    { name: "ESR (Erythrocyte Sedimentation Rate)", price: "150.00", desc: "Non-specific marker used to detect inflammation associated with infections or tumors.", params: "Westergren method" },
    { name: "Blood Grouping (ABO & Rh Typing)", price: "300.00", desc: "Determination of blood group and Rh factor for transfusions or pregnancy.", params: "ABO, Rh Factor" },
    { name: "Hb Electrophoresis (HPLC)", price: "1,400.00", desc: "Gold standard screening for Thalassemia and other Hemoglobin variants.", params: "HbA, HbA2, HbF, Variant Hemoglobins" },
    { name: "Absolute Eosinophil Count (AEC)", price: "240.00", desc: "Specific count of eosinophils to identify allergic reactions or parasitic infections.", params: "Absolute count" },
    { name: "Platelet Count", price: "195.00", desc: "Specific count of platelets to assess clotting ability.", params: "Platelet Count" },
    { name: "Reticulocyte Count", price: "450.00", desc: "Measures the rate of new red blood cell production by the bone marrow.", params: "Retic Count, Immature Reticulocyte Fraction" },

    // Diabetic & Metabolic
    { name: "HbA1c (Glycated Haemoglobin)", price: "700.00", desc: "Average blood sugar levels over the past 2-3 months.", params: "HbA1c percentage, Estimated Average Glucose (eAG)" },
    { name: "Glucose Fasting (FBS)", price: "80.00", desc: "Blood sugar level after an 8-10 hour fast.", params: "Fasting Sugar" },
    { name: "Glucose Post Prandial (PPBS)", price: "80.00", desc: "Blood sugar level 2 hours after a meal.", params: "PP Sugar" },
    { name: "Glucose Random (RBS)", price: "80.00", desc: "Blood sugar level measured at any time.", params: "Random Sugar" },
    { name: "Insulin - Fasting", price: "1,050.00", desc: "Measures the amount of insulin in the blood after fasting.", params: "Serum Insulin" },
    { name: "C-Peptide", price: "1,200.00", desc: "Evaluates the production of insulin by the pancreas.", params: "Serum C-Peptide" },
    { name: "HOMA-IR (Insulin Resistance)", price: "1,500.00", desc: "Calculated index to assess the risk of type 2 diabetes.", params: "Glucose, Insulin, Resistance Index" },

    // Lipid Profile (Cardiac Risk)
    { name: "Lipid Profile - Maxi", price: "1,450.00", desc: "Comprehensive assessment of cholesterol and cardiovascular health risk.", params: "Total Cholesterol, Triglycerides, HDL (Good), LDL (Bad), VLDL, Total Cholesterol/HDL Ratio" },
    { name: "Total Cholesterol", price: "180.00", desc: "Measures the total amount of cholesterol in the blood.", params: "Serum Cholesterol" },
    { name: "Triglycerides", price: "380.00", desc: "Measures the main form of fat stored in the body.", params: "Serum Triglycerides" },
    { name: "HDL (Good) Cholesterol", price: "350.00", desc: "High-density lipoprotein that helps remove bad cholesterol.", params: "HDL-C" },
    { name: "LDL (Bad) Cholesterol", price: "350.00", desc: "Low-density lipoprotein associated with plaque buildup.", params: "LDL-C" },
    { name: "Apolipoprotein A1 & B", price: "1,850.00", desc: "Advanced cardiac risk markers.", params: "Apo A1, Apo B, Ratio" },

    // Liver Function (LFT)
    { name: "Liver Function Test (LFT) - Maxi", price: "1,610.00", desc: "Detailed screening for liver inflammation and health.", params: "Bilirubin T/D/I, SGOT, SGPT, ALP, Total Protein, Albumin, Globulin, GGT" },
    { name: "SGPT (ALT)", price: "210.00", desc: "Primary liver enzyme marker for cellular damage.", params: "Alanine Aminotransferase" },
    { name: "SGOT (AST)", price: "200.00", desc: "Enzyme found in liver and heart; marker for tissue damage.", params: "Aspartate Aminotransferase" },
    { name: "Bilirubin Total, Direct & Indirect", price: "250.00", desc: "Measures bile pigments to detect jaundice or liver issues.", params: "Total Bilirubin, Direct Bilirubin, Indirect Bilirubin" },
    { name: "Alkaline Phosphatase (ALP)", price: "220.00", desc: "Enzyme related to liver, bile ducts, and bone health.", params: "Serum ALP" },
    { name: "Gamma GT (GGTP)", price: "370.00", desc: "Highly sensitive marker for bile duct obstruction and alcohol use.", params: "GGT" },
    { name: "Serum Albumin", price: "240.00", desc: "Protein made by the liver; monitors nutritional status.", params: "Albumin" },

    // Renal & Kidney Function (KFT)
    { name: "Renal Function Test (RFT) - Maxi", price: "1,150.00", desc: "Profiling of kidney efficiency and electrolyte balance.", params: "Urea, Creatinine, Uric Acid, Calcium, Phosphorus, Sodium, Potassium, Chloride" },
    { name: "Creatinine", price: "150.00", desc: "Waste product filtered by kidneys; primary marker for kidney function.", params: "Serum Creatinine, eGFR" },
    { name: "Urea", price: "160.00", desc: "Waste product from protein breakdown.", params: "Serum Urea, BUN (Blood Urea Nitrogen)" },
    { name: "Uric Acid", price: "250.00", desc: "Marker for gout and kidney stones.", params: "Serum Uric Acid" },
    { name: "Electrolytes", price: "490.00", desc: "Measures essential minerals for fluid balance.", params: "Sodium, Potassium, Chloride" },
    { name: "Total Calcium", price: "270.00", desc: "Vital for bone health, heart, and nerves.", params: "Serum Calcium" },
    { name: "Phosphorus", price: "185.00", desc: "Mineral that works with calcium for bone health.", params: "Inorganic Phosphorus" },

    // Vitamins & Minerals
    { name: "Vitamin D Total (25-OH)", price: "1,780.00", desc: "Assessment of Vitamin D storage for bone and immune health.", params: "25-Hydroxy Vitamin D" },
    { name: "Vitamin B12 (Cyanocobalamin)", price: "1,350.00", desc: "Essential for nerve tissue health and RBC production.", params: "Serum Vitamin B12" },
    { name: "Iron Studies", price: "810.00", desc: "Evaluates iron levels, transport, and storage capacity.", params: "Iron, TIBC, UIBC, % Transferrin Saturation" },
    { name: "Ferritin", price: "1,000.00", desc: "Most sensitive marker for iron deficiency storage.", params: "Serum Ferritin" },
    { name: "Folic Acid (Vitamin B9)", price: "1,450.00", desc: "Essential for DNA synthesis and red blood cell formation.", params: "Serum Folate" },
    { name: "Zinc", price: "2,300.00", desc: "Trace element vital for immunity and wound healing.", params: "Serum Zinc" },
    { name: "Magnesium", price: "640.00", desc: "Mineral essential for muscle and nerve function.", params: "Serum Magnesium" },

    // Thyroid & Hormones
    { name: "Thyroid Profile (Total T3, T4, TSH)", price: "600.00", desc: "Standard screening for thyroid gland activity.", params: "Total T3, Total T4, TSH" },
    { name: "TSH (Thyroid Stimulating Hormone)", price: "350.00", desc: "Sensitive marker for hyper or hypothyroidism.", params: "Ultrasensitive TSH" },
    { name: "Free T3 & Free T4", price: "800.00", desc: "Unbound, active forms of thyroid hormones.", params: "FT3, FT4" },
    { name: "Prolactin", price: "660.00", desc: "Hormone related to reproductive health and pituitary function.", params: "Serum Prolactin" },
    { name: "Testosterone Total", price: "750.00", desc: "Primary male sex hormone level.", params: "Total Testosterone" },
    { name: "Testosterone Free", price: "1,800.00", desc: "Measures active testosterone not bound to proteins.", params: "Free Testosterone" },
    { name: "AMH (Anti Mullerian Hormone)", price: "2,800.00", desc: "Assessment of ovarian reserve and fertility.", params: "Serum AMH" },
    { name: "FSH (Follicle Stimulating Hormone)", price: "630.00", desc: "Regulates reproductive processes.", params: "Serum FSH" },
    { name: "LH (Luteinizing Hormone)", price: "650.00", desc: "Triggers ovulation and testosterone production.", params: "Serum LH" },
    { name: "Estradiol (E2)", price: "750.00", desc: "Primary estrogen hormone measurement.", params: "Serum E2" },
    { name: "Progesterone", price: "750.00", desc: "Hormone essential for menstrual cycle and pregnancy.", params: "Serum Progesterone" },
    { name: "Beta HCG (Quantitative)", price: "950.00", desc: "Confirmation and monitoring of pregnancy.", params: "Total Beta HCG" },

    // Infectious Disease & Inflammation
    { name: "Dengue Profile (IgM & NS1)", price: "600.00", desc: "Rapid detection of early and mid-stage dengue infection.", params: "NS1 Antigen, Dengue IgM Antibody" },
    { name: "Widal Test (Typhoid)", price: "360.00", desc: "Agglutination test for Enteric fever.", params: "S. Typhi O, S. Typhi H, S. Paratyphi" },
    { name: "Typhodot (IgM/IgG)", price: "750.00", desc: "Rapid screening for Typhoid antibodies.", params: "Typhoid IgM, IgG" },
    { name: "CRP (C Reactive Protein)", price: "520.00", desc: "General marker for acute inflammation or infection.", params: "Quantitative CRP" },
    { name: "hs-CRP (High Sensitivity CRP)", price: "850.00", desc: "Marker for low-grade inflammation and cardiac risk.", params: "hs-CRP" },
    { name: "HIV-DUO (4th Gen)", price: "760.00", desc: "Highly sensitive early detection of HIV p24 antigen and antibodies.", params: "p24 Antigen, HIV 1/2 Antibodies" },
    { name: "HBsAg (Hepatitis B Surface Antigen)", price: "600.00", desc: "Primary screening test for Hepatitis B virus.", params: "HBsAg" },
    { name: "HCV (Hepatitis C Virus) Antibody", price: "1,700.00", desc: "Screening for Hepatitis C viral infection.", params: "Anti-HCV" },
    { name: "VDRL (RPR)", price: "300.00", desc: "Screening test for Syphilis.", params: "Rapid Plasma Reagin" },
    { name: "Malaria Parasite Smear", price: "350.00", desc: "Visual microscopic identification of malaria parasites.", params: "MP Slide (Thick and Thin)" },
    { name: "Procalcitonin", price: "3,120.00", desc: "Specific marker for bacterial sepsis.", params: "Serum Procalcitonin" },
    { name: "Chikungunya IgM", price: "900.00", desc: "Antibody test for recent Chikungunya infection.", params: "IgM Antibody" },

    // Cardiac & Specialized
    { name: "Troponin I (High Sensitivity)", price: "1,850.00", desc: "Gold standard marker for cardiac muscle injury.", params: "hs-Trop I" },
    { name: "D-Dimer (Quantitative)", price: "1,520.00", desc: "Detection of blood clots and thrombosis risk.", params: "D-Dimer" },
    { name: "NT-Pro BNP", price: "3,010.00", desc: "Marker for heart failure and cardiac stress.", params: "B-type Natriuretic Peptide" },
    { name: "Homocysteine", price: "1,470.00", desc: "Amino acid marker related to heart disease and stroke risk.", params: "Serum Homocysteine" },
    { name: "CPK Total", price: "550.00", desc: "Measures creatine phosphokinase to check for muscle damage.", params: "CK Total" },
    { name: "LDH (Lactate Dehydrogenase)", price: "450.00", desc: "Marker for general tissue damage or hemolysis.", params: "Serum LDH" },
    { name: "Amylase", price: "600.00", desc: "Enzyme marker for pancreatic health.", params: "Serum Amylase" },
    { name: "Lipase", price: "750.00", desc: "Specific enzyme marker for acute pancreatitis.", params: "Serum Lipase" },

    // Cancer Markers
    { name: "PSA Total (Prostate Specific Antigen)", price: "1,200.00", desc: "Screening marker for prostate health in men.", params: "Total PSA" },
    { name: "CA 125", price: "1,450.00", desc: "Tumor marker primarily used for monitoring ovarian cancer.", params: "Cancer Antigen 125" },
    { name: "CEA (Carcino Embryonic Antigen)", price: "1,350.00", desc: "General tumor marker for colon and GI cancers.", params: "Serum CEA" },
    { name: "AFP (Alpha Feto Protein)", price: "1,020.00", desc: "Marker for liver cancer and germ cell tumors.", params: "Serum AFP" },
    { name: "CA 19.9", price: "1,760.00", desc: "Tumor marker for pancreatic and gallbladder cancers.", params: "Cancer Antigen 19.9" },
    { name: "Beta-2 Microglobulin", price: "1,200.00", desc: "Marker for certain blood cancers and kidney function.", params: "Serum B2M" },

    // Autoimmune & Immunology
    { name: "ANA Screening (IF)", price: "990.00", desc: "Screening for Antinuclear Antibodies related to autoimmune disease.", params: "Antinuclear Antibodies" },
    { name: "ANA Blot (16 Antigens)", price: "4,490.00", desc: "Detailed profile to identify specific autoimmune markers.", params: "dsDNA, Sm, RNP, SSA, SSB, Scl-70, etc." },
    { name: "RA Factor (Rheumatoid Factor)", price: "750.00", desc: "Screening for Rheumatoid Arthritis.", params: "Quantitative RA Factor" },
    { name: "Anti-CCP Antibody", price: "1,650.00", desc: "Highly specific marker for Rheumatoid Arthritis.", params: "ACCP" },
    { name: "ASO Titre", price: "650.00", desc: "Marker for recent streptococcal infection.", params: "Antistreptolysin O" },

    // Urine, Stool & Others
    { name: "Urine Routine Examination (Automated)", price: "180.00", desc: "Physical, chemical, and microscopic analysis of urine.", params: "pH, Sugar, Protein, Pus cells, RBCs, Casts, Crystals" },
    { name: "Stool Routine & Microscopy", price: "270.00", desc: "Screening for parasites and gastrointestinal infections.", params: "Ova, Cysts, Occult Blood" },
    { name: "Microalbumin - Urine", price: "600.00", desc: "Early detection marker for diabetic kidney damage.", params: "Albumin/Creatinine Ratio" },
    { name: "Urine Culture & Sensitivity", price: "900.00", desc: "Identification of bacteria in urine and effective antibiotics.", params: "Culture, Antibiotic Panel" },
    { name: "Semen Analysis", price: "600.00", desc: "Evaluation of male fertility factors.", params: "Count, Motility, Morphology, Volume" },

    // Genetic & Molecular
    { name: "1p/19q Co-Deletion (FISH)", price: "13,515.00", desc: "Advanced genetic marker for brain tumor classification.", params: "Chromosome 1p, Chromosome 19q" },
    { name: "Beta Thalassemia Mutation Detection", price: "9,590.00", desc: "Genetic identification of thalassemia traits.", params: "HBB Gene Analysis" },
    { name: "MTB - GeneXpert XDR Rapid Plus", price: "6,650.00", desc: "Molecular detection of Tuberculosis and drug resistance.", params: "TB Detection, RIF Resistance" },
    { name: "HLA-B27 (Flow Cytometry)", price: "2,500.00", desc: "Genetic marker associated with Ankylosing Spondylitis.", params: "HLA-B27" },

    // Radiology (X-Ray)
    { name: "X-Ray Chest AP & LAT VIEW", price: "660.00", desc: "Digital radiological imaging of the chest cavity.", params: "AP View, Lateral View" },
    { name: "X-Ray KNEE AP & LAT", price: "385.00", desc: "Radiological imaging of the knee joint.", params: "Knee AP, Knee Lateral" },
    { name: "X-Ray Spine Cervical AP & LAT", price: "550.00", desc: "Radiological imaging of the neck region.", params: "Spine AP/Lateral" },

    // Health Packages
    { name: "TruHealth Master Checkup", price: "4,500.00", desc: "Comprehensive senior health screen covering major organ systems.", params: "60+ Parameters: CBC, LFT, KFT, Lipid, HbA1c, Urine, Thyroid" },
    { name: "TruHeart Gold", price: "2,499.00", desc: "Targeted evaluation of cardiovascular risk factors.", params: "Lipid, Homocysteine, hs-CRP, CBC, Sugar" },
    { name: "TruHealth Body Watch - Lifestyle Check", price: "12,500.00", desc: "Deep health assessment for busy professionals.", params: "100+ Parameters including Vitamins and Cancer Markers" },
    { name: "Fever Profile - Mini", price: "1,800.00", desc: "Quick diagnostic screen for unexplained fever.", params: "CBC, Widal, Malaria, Urine Routine" },
    { name: "PCOD / PCOS Profile", price: "3,500.00", desc: "Hormonal assessment for Polycystic Ovary Syndrome.", params: "FSH, LH, Prolactin, Testosterone, Insulin" }
];
