/**
 * Winpath Laboratory - Full Comprehensive Rate Card
 * Includes detailed parameters and clinical descriptions for all tests.
 */

const rateCard = [
  {
    name: "1p/19q Co-Deletion, Tissue",
    price: "₹13,515.00",
    desc: "A molecular genetic test used to identify the co-deletion of chromosomes 1p and 19q, a critical prognostic marker for oligodendrogliomas.",
    params: "1p/19q status, Tumor cell percentage, Fluorescence in situ hybridization (FISH) signals"
  },
  {
    name: "3-Methyl Histidine - Quantitative, Urine**",
    price: "₹6,760.00",
    desc: "Measurement of urinary 3-methylhistidine to evaluate muscle protein breakdown and myofibrillar protein turnover.",
    params: "3-Methylhistidine level, Creatinine, 24-hour urine volume"
  },
  {
    name: "3-Methyl Histidine - Quantitative, EDTA Plasma**",
    price: "₹6,570.00",
    desc: "Plasma analysis of 3-methylhistidine to assess systemic muscle catabolism or nutritional status in patients.",
    params: "Plasma concentration of 3-MH, Sample integrity"
  },
  {
    name: "5-HIAA, Urine 24 Hrs",
    price: "₹3,545.00",
    desc: "Quantitative measurement of 5-Hydroxyindoleacetic acid in 24-hour urine to screen for and monitor serotonin-producing carcinoid tumors.",
    params: "5-HIAA concentration, 24-hour total volume, Creatinine normalization"
  },
  {
    name: "5q Deletion/Monosomy (MDS), Heparin Blood",
    price: "₹5,340.00",
    desc: "A cytogenetic study to detect chromosome 5 abnormalities, which are diagnostic and prognostic for Myelodysplastic Syndromes (MDS).",
    params: "5q- status, Number of cells analyzed, Percentage of aberrant cells"
  },
  {
    name: "5q Deletion/Monosomy (MDS), Heparin Bone Marrow",
    price: "₹5,340.00",
    desc: "Bone marrow analysis using FISH to identify the loss of the long arm of chromosome 5, a hallmark of 5q- syndrome.",
    params: "Chromosomal integrity, MDS specific markers, Cell morphology"
  },
  {
    name: "7q Deletion/Monosomy (MDS), Heparin Blood",
    price: "₹5,340.00",
    desc: "Genetic screening for chromosome 7 abnormalities, often associated with a higher risk of progression in MDS and AML.",
    params: "7q deletion status, Monosomy 7 detection, Karyotype analysis"
  },
  {
    name: "7q Deletion/Monosomy (MDS), Heparin Bone Marrow",
    price: "₹5,340.00",
    desc: "In-depth marrow study for chromosome 7 markers to determine prognosis and treatment strategies for hematological malignancies.",
    params: "Prognostic classification, Marrow cellularity, Genetic signal count"
  },
  {
    name: "7q11.23 Deletion in Williams - Beuren Syndrome, Heparin Blood**",
    price: "₹11,130.00",
    desc: "Targeted genetic test to confirm Williams-Beuren syndrome by identifying the characteristic microdeletion on chromosome 7.",
    params: "7q11.23 locus status, Elastin (ELN) gene presence, Clinical correlation"
  },
  {
    name: "11q Deletion ATM (CLL), Heparin Blood",
    price: "₹5,340.00",
    desc: "Detection of ATM gene deletion on chromosome 11q, used to assess the aggressiveness of Chronic Lymphocytic Leukemia.",
    params: "ATM deletion percentage, Interphase FISH analysis, Risk stratification"
  },
  {
    name: "13q Deletion MM (CLL), Heparin Blood",
    price: "₹5,340.00",
    desc: "Tests for the most common genetic deletion in CLL, providing essential information for disease staging and outlook.",
    params: "13q14 locus status, Monoallelic/Biallelic deletion, Cell count"
  },
  {
    name: "14q32.3 IGH gene rearrangement (ALL,NHL), Heparin Blood",
    price: "₹5,995.00",
    desc: "Molecular screening for IGH gene translocations, crucial for the classification of B-cell lymphomas and leukemias.",
    params: "IGH rearrangement status, Translocation partner identification, Break-apart signal"
  },
  {
    name: "FGFR 1 gene rearrangement t(8p11.2), Heparin Blood",
    price: "₹5,245.00",
    desc: "Diagnostic test for FGFR1 rearrangements, associated with the rare 8p11 myeloproliferative syndrome.",
    params: "FGFR1 translocation status, Fusion protein potential, Cell signal patterns"
  },
  {
    name: "TruHealth Body Watch - Fitness Check (Female, Below 45 Years)",
    price: "₹6,500.00",
    desc: "A baseline wellness profile designed for younger women to monitor metabolic health, organ function, and vitamin levels.",
    params: "CBC, Liver Function (LFT), Kidney Function (KFT), Lipid Profile, Thyroid (TSH), Iron Studies, Vitamin D & B12"
  },
  {
    name: "TruHealth Body Watch - Fitness Check (Male, Below 45 Years)",
    price: "₹6,500.00",
    desc: "A foundational health package for men under 45, screening for common cardiovascular and lifestyle risks.",
    params: "Complete Blood Count, Fasting Blood Sugar, Uric Acid, Cholesterol, Liver Enzymes, Renal Screen"
  },
  {
    name: "X-Ray AP & LAT VIEW",
    price: "₹660.00",
    desc: "Standard radiographic imaging providing two views (Frontal and Side) of the specified body part for diagnostic evaluation.",
    params: "Radiological findings, Bone structure analysis, Joint space, Soft tissue assessment"
  },
  {
    name: "Zinc by ICPMS, Serum",
    price: "₹2,300.00",
    desc: "High-precision measurement of serum zinc levels using Inductively Coupled Plasma Mass Spectrometry to detect deficiency or toxicity.",
    params: "Serum Zinc concentration, Nutritional status assessment"
  },
  {
    name: "MTB - Xpert XDR Rapid Plus Panel, Pulmonary",
    price: "₹6,650.00",
    desc: "Advanced molecular assay for tuberculosis that identifies both the MTB complex and resistance to second-line drugs in one test.",
    params: "MTB Detection, Isoniazid resistance, Fluoroquinolone resistance, SLID resistance (Amikacin/Kanamycin)"
  },
  {
    name: "Zika Virus RNA Detection by RT- PCR, Serum",
    price: "₹7,085.00",
    desc: "Highly specific molecular test to detect the genetic material of the Zika virus during the acute phase of infection.",
    params: "Viral RNA detection, Cycle threshold (Ct) value, Clinical interpretation"
  },
  {
    name: "Y-Chromosome Microdeletion Analysis, EDTA Blood",
    price: "₹8,830.00",
    desc: "Genetic test for men with severe infertility to detect missing regions (AZF) on the Y-chromosome essential for sperm production.",
    params: "AZFa region, AZFb region, AZFc region, SRY gene status"
  }
];

export default rateCard;
