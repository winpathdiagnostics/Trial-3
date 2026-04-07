/**
 * Winpath Diagnostics - Complete Rate Card Dataset
 * This file contains all test names, prices, descriptions, and searchable parameters.
 * When you update this file, the changes will reflect automatically on the website.
 */

const rateCard = [
    { 
        name: "Peripheral Smear Examination (PBS), EDTA Blood", 
        price: "350.00", 
        desc: "Detailed microscopic analysis of blood cells to detect morphological abnormalities.",
        params: "RBC morphology, WBC differential count, Platelet estimate, Parasites (Malaria/Filaria)"
    },
    { 
        name: "CBC Haemogram, EDTA Blood", 
        price: "400.00", 
        desc: "Complete blood profiling used as a primary diagnostic tool for various conditions.",
        params: "Hemoglobin (Hb), Total Leucocyte Count (WBC), RBC Count, Platelet Count, PCV, MCV, MCH, MCHC, RDW, Differential Count (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)"
    },
    { 
        name: "Thyroid Profile (T3, T4, TSH)", 
        price: "600.00", 
        desc: "Comprehensive evaluation of thyroid gland activity.",
        params: "Total Triiodothyronine (T3), Total Thyroxine (T4), Thyroid Stimulating Hormone (TSH)"
    },
    { 
        name: "Lipid Profile - Maxi", 
        price: "1,450.00", 
        desc: "Assessment of cholesterol levels and cardiovascular health risk.",
        params: "Total Cholesterol, Serum Triglycerides, HDL (Good Cholesterol), LDL (Bad Cholesterol), VLDL, Total Cholesterol/HDL Ratio, LDL/HDL Ratio"
    },
    { 
        name: "Liver Function Test (LFT) - Maxi", 
        price: "1,610.00", 
        desc: "A group of tests that measure enzymes and proteins in the blood to check liver health.",
        params: "SGOT (AST), SGPT (ALT), Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Albumin, Globulin, A/G Ratio, Alkaline Phosphatase (ALP), Gamma GT (GGTP)"
    },
    { 
        name: "Renal Function Test (RFT) - Maxi", 
        price: "1,150.00", 
        desc: "Profiling of kidney efficiency and waste filtration capacity.",
        params: "Blood Urea Nitrogen (BUN), Serum Creatinine, Uric Acid, Serum Calcium, Serum Phosphorus, Electrolytes (Sodium, Potassium, Chloride)"
    },
    { 
        name: "Glucose Fasting, Fluoride Plasma", 
        price: "80.00", 
        desc: "Primary test to check for Diabetes or Prediabetes.",
        params: "Fasting Blood Sugar (FBS), Plasma Glucose"
    },
    { 
        name: "HbA1c - Glycated Haemoglobin", 
        price: "700.00", 
        desc: "Measures average blood sugar levels over the past 2-3 months.",
        params: "Glycosylated Hemoglobin, Estimated Average Glucose (eAG)"
    },
    { 
        name: "Vitamin D Total - 25 Hydroxy (OH)", 
        price: "1,780.00", 
        desc: "Measures the level of Vitamin D storage essential for bone health.",
        params: "25-OH Vitamin D Total"
    },
    { 
        name: "Vitamin B12 (Cyanocobalamin)", 
        price: "1,350.00", 
        desc: "Essential for nerve tissue health, brain function, and red blood cell production.",
        params: "Serum Vitamin B12 level"
    },
    { 
        name: "CRP (C Reactive Protein), Serum", 
        price: "520.00", 
        desc: "A protein marker that increases in response to inflammation or infection.",
        params: "Quantitative CRP"
    },
    { 
        name: "Iron Studies, Serum", 
        price: "810.00", 
        desc: "Assesses how much iron is in your system and how well it is transported.",
        params: "Serum Iron, Total Iron Binding Capacity (TIBC), UIBC, % Transferrin Saturation"
    },
    { 
        name: "HBsAg Screening, Serum", 
        price: "600.00", 
        desc: "Primary screening test to detect Hepatitis B viral infection.",
        params: "Hepatitis B Surface Antigen"
    },
    { 
        name: "HIV-DUO (IVth Generation test)", 
        price: "760.00", 
        desc: "Advanced screening for HIV p24 antigen and antibodies for early detection.",
        params: "HIV 1 & 2 Antibody, p24 Antigen"
    },
    { 
        name: "Beta Thalassemia Mutation Detection", 
        price: "9,590.00", 
        desc: "Molecular genetic test to identify carriers of the Thalassemia gene.",
        params: "HBB Gene Sequencing, Common Mutation Panel"
    },
    { 
        name: "Urine Routine Examination (Automated)", 
        price: "180.00", 
        desc: "Comprehensive screening for kidney diseases, UTI, and diabetes.",
        params: "Color, Transparency, pH, Specific Gravity, Protein (Albumin), Glucose (Sugar), Ketone, Bilirubin, Urobilinogen, Nitrite, Leucocytes, Pus Cells, RBCs, Epithelial Cells, Casts, Crystals"
    },
    { 
        name: "Zinc, Serum", 
        price: "2,300.00", 
        desc: "Measures levels of the essential trace element Zinc.",
        params: "Serum Zinc Level"
    },
    { 
        name: "Dengue Profile (IgM & NS1)", 
        price: "600.00", 
        desc: "Rapid test for acute Dengue infection.",
        params: "Dengue NS1 Antigen, Dengue IgM Antibody"
    },
    { 
        name: "Widal Test for Typhoid", 
        price: "360.00", 
        desc: "Agglutination test used for the diagnosis of Enteric (Typhoid) fever.",
        params: "S. Typhi O, S. Typhi H, S. Paratyphi AH, S. Paratyphi BH"
    },
    { 
        name: "1p/19q Co-Deletion, Tissue", 
        price: "13,515.00", 
        desc: "Molecular genetic study used for the diagnostic classification of brain tumors.",
        params: "Chromosome 1p deletion, Chromosome 19q deletion, Fluorescence in situ hybridization (FISH)"
    },
    { 
        name: "ANA Screening by EIA, Serum", 
        price: "990.00", 
        desc: "Screening test for autoimmune disorders like SLE.",
        params: "Antinuclear Antibodies"
    },
    { 
        name: "Absolute Eosinophil Count", 
        price: "240.00", 
        desc: "Test to determine the absolute number of eosinophils in blood, often used for allergies.",
        params: "Eosinophil count, AEC"
    },
    { 
        name: "Amylase, Serum", 
        price: "600.00", 
        desc: "Measures the amount of amylase in blood to check for pancreas health.",
        params: "Serum Amylase"
    },
    { 
        name: "Bone Marrow Aspiration", 
        price: "3,675.00", 
        desc: "Specialized procedure to analyze the production of blood cells in the marrow.",
        params: "Cellularity, M:E ratio, Erythropoiesis, Myelopoiesis, Megakaryocytes"
    },
    { 
        name: "Calcium, Serum", 
        price: "270.00", 
        desc: "Measures blood calcium levels, important for bones, heart, and nerves.",
        params: "Total Calcium"
    },
    { 
        name: "CEA (Carcino Embryonic Antigen)", 
        price: "1,350.00", 
        desc: "Tumor marker often used to monitor treatment in cancer patients.",
        params: "Serum CEA"
    },
    { 
        name: "Chloride, Serum", 
        price: "155.00", 
        desc: "Electrolyte test to check for acid-base balance and hydration.",
        params: "Serum Chloride"
    },
    { 
        name: "Creatinine, Serum", 
        price: "150.00", 
        desc: "Key indicator of kidney health and filtration function.",
        params: "Serum Creatinine, eGFR"
    },
    { 
        name: "D Dimer - Quantitative", 
        price: "1,520.00", 
        desc: "Used to rule out the presence of serious blood clots (thrombosis).",
        params: "D-Dimer, FDP"
    },
    { 
        name: "Ferritin, Serum", 
        price: "1,000.00", 
        desc: "Measures the amount of stored iron in the body.",
        params: "Serum Ferritin"
    },
    { 
        name: "Folic Acid, Serum", 
        price: "1,450.00", 
        desc: "Measures Vitamin B9 levels, essential for DNA synthesis and RBC health.",
        params: "Serum Folate"
    },
    { 
        name: "FSH (Follicle Stimulating Hormone)", 
        price: "630.00", 
        desc: "Hormone test used to evaluate reproductive health and pituitary function.",
        params: "Serum FSH"
    },
    { 
        name: "LH (Luteinizing Hormone)", 
        price: "650.00", 
        desc: "Hormone test related to ovulation and testosterone production.",
        params: "Serum LH"
    },
    { 
        name: "Prolactin, Serum", 
        price: "660.00", 
        desc: "Measures prolactin levels, often used to investigate menstrual or fertility issues.",
        params: "Serum Prolactin"
    },
    { 
        name: "Testosterone Total, Serum", 
        price: "750.00", 
        desc: "Measures total testosterone levels in the blood.",
        params: "Total Testosterone"
    },
    { 
        name: "CA 125, Serum", 
        price: "1,450.00", 
        desc: "Tumor marker used to monitor ovarian cancer.",
        params: "Cancer Antigen 125"
    },
    { 
        name: "AFP (Alpha Feto Protein)", 
        price: "1,020.00", 
        desc: "Marker used in prenatal screening and for certain types of cancer.",
        params: "Serum AFP"
    },
    { 
        name: "Sodium, Serum", 
        price: "190.00", 
        desc: "Electrolyte test to monitor fluid balance and nerve/muscle function.",
        params: "Serum Sodium"
    },
    { 
        name: "Stool Routine Examination", 
        price: "270.00", 
        desc: "Diagnostic test for digestive issues, parasites, and infections.",
        params: "Color, Consistency, Pus cells, RBCs, Ova, Cysts, Occult Blood"
    },
    { 
        name: "Urea, Serum", 
        price: "160.00", 
        desc: "Measures the amount of urea nitrogen in blood, a waste product of protein metabolism.",
        params: "Serum Urea, BUN"
    },
    { 
        name: "VDRL (RPR), Serum", 
        price: "300.00", 
        desc: "Screening test for syphilis.",
        params: "Rapid Plasma Reagin"
    }
];
