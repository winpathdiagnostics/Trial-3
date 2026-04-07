const rateCard = [
            // Hematology & Basic Screens
            { name: "Peripheral Smear Examination (PBS)", price: "350.00", desc: "Detailed microscopic analysis of blood cells for morphology.", params: "RBC morphology, WBC differential, Platelet estimate" },
            { name: "CBC Haemogram (Complete Blood Count)", price: "400.00", desc: "Primary diagnostic tool for general health screening.", params: "Hb, WBC, RBC, Platelets, PCV, MCV, MCH, MCHC, RDW, Neutrophils, Lymphocytes" },
            { name: "ESR (Erythrocyte Sedimentation Rate)", price: "150.00", desc: "Non-specific marker for inflammation.", params: "Westergren method" },
            { name: "Blood Grouping (ABO & Rh Typing)", price: "300.00", desc: "Determination of blood group and Rh factor.", params: "ABO, Rh Factor" },
            { name: "Hb Electrophoresis (HPLC)", price: "1,400.00", desc: "Screening for Thalassemia and Hemoglobin variants.", params: "HbA, HbA2, HbF, Variant Hemoglobins" },
            { name: "Absolute Eosinophil Count (AEC)", price: "240.00", desc: "Counts eosinophils to detect allergic or parasitic conditions.", params: "Absolute count" },

            // Diabetic & Metabolic
            { name: "HbA1c (Glycated Haemoglobin)", price: "700.00", desc: "3-month average blood sugar control.", params: "HbA1c, eAG (Estimated Average Glucose)" },
            { name: "Glucose Fasting (FBS)", price: "80.00", desc: "Blood sugar level after 8-10 hours of fasting.", params: "Fasting Sugar" },
            { name: "Glucose Post Prandial (PPBS)", price: "80.00", desc: "Blood sugar 2 hours after a meal.", params: "PP Sugar" },
            { name: "Glucose Random (RBS)", price: "80.00", desc: "Random blood sugar measurement.", params: "Random Sugar" },
            { name: "Insulin - Fasting", price: "1,050.00", desc: "Measures insulin levels in fasting state.", params: "Serum Insulin" },
            { name: "C-Peptide", price: "1,200.00", desc: "Assesses endogenous insulin production.", params: "Serum C-Peptide" },

            // Lipid Profile (Cardiac Risk)
            { name: "Lipid Profile - Maxi", price: "1,450.00", desc: "Full cholesterol panel for heart health assessment.", params: "Total Cholesterol, Triglycerides, HDL, LDL, VLDL, Ratios" },
            { name: "Total Cholesterol", price: "180.00", desc: "Measures overall cholesterol levels.", params: "Serum Cholesterol" },
            { name: "Triglycerides", price: "380.00", desc: "Measures fats in the blood.", params: "Serum TG" },
            { name: "HDL (Good) Cholesterol", price: "350.00", desc: "High-density lipoprotein levels.", params: "HDL-C" },
            { name: "LDL (Bad) Cholesterol", price: "350.00", desc: "Low-density lipoprotein levels.", params: "LDL-C" },

            // Liver Function
            { name: "Liver Function Test (LFT) - Maxi", price: "1,610.00", desc: "Comprehensive liver health assessment.", params: "Bilirubin T/D/I, SGOT, SGPT, ALP, Protein, Albumin, Globulin, GGT" },
            { name: "SGPT (ALT)", price: "210.00", desc: "Liver enzyme marker for cellular damage.", params: "Alanine Aminotransferase" },
            { name: "SGOT (AST)", price: "200.00", desc: "Liver enzyme marker.", params: "Aspartate Aminotransferase" },
            { name: "Bilirubin Total, Direct & Indirect", price: "250.00", desc: "Measures bile pigment levels.", params: "Total, Direct, Indirect Bilirubin" },
            { name: "Alkaline Phosphatase (ALP)", price: "220.00", desc: "Enzyme related to liver and bone health.", params: "Serum ALP" },
            { name: "GGT (Gamma GT)", price: "370.00", desc: "Sensitive marker for bile duct and liver issues.", params: "GGTP" },

            // Renal & Kidney Function
            { name: "Renal Function Test (RFT) - Maxi", price: "1,150.00", desc: "Full kidney function profile.", params: "Urea, Creatinine, Uric Acid, Calcium, Phosphorus, Electrolytes" },
            { name: "Creatinine", price: "150.00", desc: "Key waste product marker for kidney efficiency.", params: "Serum Creatinine" },
            { name: "Urea", price: "160.00", desc: "Waste product from protein metabolism.", params: "Serum Urea, BUN" },
            { name: "Uric Acid", price: "250.00", desc: "Marker for gout and kidney stones.", params: "Serum Uric Acid" },
            { name: "Electrolytes", price: "490.00", desc: "Balances body fluids.", params: "Sodium, Potassium, Chloride" },
            { name: "Total Calcium", price: "270.00", desc: "Vital for bones and nerves.", params: "Serum Calcium" },

            // Vitamins & Minerals
            { name: "Vitamin D Total (25-OH)", price: "1,780.00", desc: "Measures Vitamin D stores.", params: "25-Hydroxy Vitamin D" },
            { name: "Vitamin B12 (Cyanocobalamin)", price: "1,350.00", desc: "Essential for nerve health and RBCs.", params: "Serum Vitamin B12" },
            { name: "Iron Studies", price: "810.00", desc: "Assesses iron transport and storage.", params: "Iron, TIBC, UIBC, % Saturation" },
            { name: "Ferritin", price: "1,000.00", desc: "Best marker for iron deficiency.", params: "Serum Ferritin" },
            { name: "Folic Acid (Vitamin B9)", price: "1,450.00", desc: "Essential for blood formation.", params: "Serum Folate" },
            { name: "Zinc", price: "2,300.00", desc: "Essential trace element.", params: "Serum Zinc" },
            { name: "Magnesium", price: "640.00", desc: "Mineral vital for muscles and nerves.", params: "Serum Magnesium" },

            // Thyroid & Hormones
            { name: "Thyroid Profile (Total T3, T4, TSH)", price: "600.00", desc: "Full thyroid screening.", params: "Total T3, Total T4, TSH" },
            { name: "TSH (Thyroid Stimulating Hormone)", price: "350.00", desc: "Sensitive screen for thyroid issues.", params: "Ultrasensitive TSH" },
            { name: "Free T3 (FT3)", price: "400.00", desc: "Unbound triiodothyronine.", params: "Free T3" },
            { name: "Free T4 (FT4)", price: "400.00", desc: "Unbound thyroxine.", params: "Free T4" },
            { name: "Prolactin", price: "660.00", desc: "Hormone related to reproductive health.", params: "Serum Prolactin" },
            { name: "Testosterone Total", price: "750.00", desc: "Male hormone profile.", params: "Total Testosterone" },
            { name: "AMH (Anti Mullerian Hormone)", price: "2,800.00", desc: "Ovarian reserve marker.", params: "Serum AMH" },
            { name: "FSH (Follicle Stimulating Hormone)", price: "630.00", desc: "Reproductive health indicator.", params: "Serum FSH" },
            { name: "LH (Luteinizing Hormone)", price: "650.00", desc: "Ovulation/fertility marker.", params: "Serum LH" },
            { name: "Beta HCG (Quantitative)", price: "950.00", desc: "Pregnancy confirmation and monitoring.", params: "Total Beta HCG" },

            // Infectious Disease
            { name: "Dengue Profile (IgM & NS1)", price: "600.00", desc: "Rapid dengue detection.", params: "NS1 Antigen, IgM Antibody" },
            { name: "Widal Test", price: "360.00", desc: "Agglutination test for Typhoid.", params: "S. Typhi O/H, S. Paratyphi AH/BH" },
            { name: "Typhodot (IgM/IgG)", price: "750.00", desc: "Rapid screening for Typhoid antibodies.", params: "Typhoid IgM, IgG" },
            { name: "CRP (C Reactive Protein)", price: "520.00", desc: "Quantitative inflammation marker.", params: "Serum CRP" },
            { name: "HIV-DUO (4th Gen)", price: "760.00", desc: "Advanced early detection for HIV.", params: "p24 Antigen, HIV 1/2 Antibodies" },
            { name: "HBsAg (Hepatitis B Surface Antigen)", price: "600.00", desc: "Primary screen for Hepatitis B.", params: "HBsAg" },
            { name: "HCV (Hepatitis C Virus) Antibody", price: "1,700.00", desc: "Screen for Hepatitis C.", params: "Anti-HCV" },
            { name: "VDRL (RPR)", price: "300.00", desc: "Screen for Syphilis.", params: "RPR" },
            { name: "Malaria Parasite Smear", price: "350.00", desc: "Visual check for malaria parasites.", params: "MP Slide" },
            { name: "Procalcitonin", price: "3,120.00", desc: "Sepsis marker.", params: "Serum Procalcitonin" },

            // Cardiac & Specialized
            { name: "Troponin I (High Sensitivity)", price: "1,850.00", desc: "Cardiac injury marker.", params: "hs-Trop I" },
            { name: "D-Dimer (Quantitative)", price: "1,520.00", desc: "Screen for blood clots/thrombosis.", params: "D-Dimer" },
            { name: "NT-Pro BNP", price: "3,010.00", desc: "Heart failure marker.", params: "B-type Natriuretic Peptide" },
            { name: "Homocysteine", price: "1,470.00", desc: "Cardiac risk factor.", params: "Serum Homocysteine" },
            { name: "CPK Total", price: "550.00", desc: "Muscle enzyme marker.", params: "Creatine Phosphokinase" },
            { name: "ANA Blot", price: "4,490.00", desc: "Detailed autoimmune profile.", params: "16-18 Antigen Profile" },

            // Cancer Markers
            { name: "PSA Total (Prostate Specific Antigen)", price: "1,200.00", desc: "Prostate screening marker.", params: "Total PSA" },
            { name: "CA 125", price: "1,450.00", desc: "Ovarian cancer marker.", params: "Cancer Antigen 125" },
            { name: "CEA (Carcino Embryonic Antigen)", price: "1,350.00", desc: "Colon/GI cancer marker.", params: "Serum CEA" },
            { name: "AFP (Alpha Feto Protein)", price: "1,020.00", desc: "Liver/Germ cell cancer marker.", params: "Serum AFP" },
            { name: "CA 19.9", price: "1,760.00", desc: "Pancreatic cancer marker.", params: "Cancer Antigen 19.9" },

            // Urine & Others
            { name: "Urine Routine Examination (Automated)", price: "180.00", desc: "Full chemical and microscopic analysis.", params: "pH, Sugar, Protein, Pus cells, RBCs, Casts, Crystals" },
            { name: "Stool Routine", price: "270.00", desc: "Parasitic and infection screen.", params: "Ova, Cysts, Occult Blood" },
            { name: "Microalbumin - Urine", price: "600.00", desc: "Early diabetic kidney damage marker.", params: "Random/24Hr Urine" },
            { name: "Urine Culture & Sensitivity", price: "900.00", desc: "Identifies bacteria and correct antibiotic.", params: "Culture, Antibiotic panel" },
            { name: "Semen Analysis", price: "600.00", desc: "Fertility assessment.", params: "Count, Motility, Morphology" },

            // Health Packages
            { name: "TruHealth Master Checkup", price: "4,500.00", desc: "Comprehensive senior health screen.", params: "CBC, LFT, KFT, Lipid, HbA1c, Urine, Thyroid" },
            { name: "TruHeart Gold", price: "2,499.00", desc: "Targeted heart health evaluation.", params: "Lipid, Homocysteine, hs-CRP, CBC" },
            { name: "TruHealth Body Watch - Lifestyle Check", price: "12,500.00", desc: "Deep health dive for busy professionals.", params: "100+ Parameters including Vitamins and Cancer Markers" },
            { name: "Fever Profile - Mini", price: "1,800.00", desc: "Basic fever diagnostic screen.", params: "CBC, Widal, Malaria, Urine" },

            // Radiology FALLBACKS (As seen in PDF)
            { name: "X-Ray Chest AP & LAT VIEW", price: "660.00", desc: "Radiological chest imaging.", params: "AP View, Lateral View" },
            { name: "X-Ray KNEE AP & LAT (One Side)", price: "385.00", desc: "Radiological knee imaging.", params: "AP, Lateral" },
            
            // Genetic & Molecular
            { name: "1p/19q Co-Deletion", price: "13,515.00", desc: "Molecular brain tumor marker.", params: "FISH analysis" },
            { name: "Beta Thalassemia Mutation Detection", price: "9,590.00", desc: "Genetic trait identification.", params: "HBB gene analysis" },
            { name: "MTB - Xpert XDR Rapid Plus Panel", price: "6,650.00", desc: "Advanced TB detection with drug resistance.", params: "Tuberculosis, GeneXpert" }
        ];
