// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import Entry from './components/entry';
import { Tag, TAGS } from './components/tags';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA1NsFPm4XZG4P-41vY-u8HF5388_CUOxo",

  authDomain: "transresearchcomp.firebaseapp.com",

  projectId: "transresearchcomp",

  storageBucket: "transresearchcomp.appspot.com",

  messagingSenderId: "211114813873",

  appId: "1:211114813873:web:0c4e3ac4735017fea0f590",

  measurementId: "G-TXGZ94PEMK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export let ENTRIES = [
    {   'tags': [   <Tag tag={TAGS[4]} isInteractable={false} level0={TAGS[4].level}/>,
                    <Tag tag={TAGS[15]} isInteractable={false} level0={TAGS[15].level}/>,
                ], 
        'link': 'https://reader.elsevier.com/reader/sd/pii/S1054139X18300855?token=ED075841EF0D6F132E801DCB14D9C4FEEAE6415E72512C1D00C2B57B40B1E0A518867C5675872D41F43ADB238AB62007&originRegion=us-east-1&originCreation=20230210070049',
        'authors': 'Stephen T. Russell, Ph.D., Amanda M. Pollitt, Ph.D., Gu Li, Ph.D., Arnold H. Grossman, Ph.D.',
        'title': 'Chosen Name Use Is Linked to Reduced Depressive Symptoms, Suicidal Ideation, and Suicidal Behavior Among Transgender Youth', 
        'abstract': "Purpose: This study aimed to examine the relation between chosen name use, as a proxy for youths’ gender affirmation in various contexts, and mental health among transgender youth. Methods: Data come from a community cohort sample of 129 transgender and gender nonconforming youth from three U.S. cities. We assessed chosen name use across multiple contexts and examined its association with depression, suicidal ideation, and suicidal behavior. Results: After adjusting for personal characteristics and social support, chosen name use in more contexts was associated with lower depression, suicidal ideation, and suicidal behavior. Depression, suicidal ideation, and suicidal behavior were lowest when chosen names could be used in all four contexts. Conclusion: For transgender youth who choose a name different from the one given at birth, use of their chosen name in multiple contexts affirms their gender identity and reduces mental health risks known to be high in this group."},
    {   'tag': <Tag tag={TAGS[1]} isInteractable={false} level0={TAGS[0].level}/>, 
        'title': 'Cross-ancestry genome-wide analysis of atrial fibrillation unveils disease biology and enables cardioembolic risk prediction', 
        'abstract': "Atrial fibrillation (AF) is a common cardiac arrhythmia resulting in increased risk of stroke. Despite highly heritable etiology, our understanding of the genetic architecture of AF remains incomplete. Here we performed a genome-wide association study in the Japanese population comprising 9,826 cases among 150,272 individuals and identified East Asian-specific rare variants associated with AF. A cross-ancestry meta-analysis of >1 million individuals, including 77,690 cases, identified 35 new susceptibility loci. Transcriptome-wide association analysis identified IL6R as a putative causal gene, suggesting the involvement of immune responses. Integrative analysis with ChIP-seq data and functional assessment using human induced pluripotent stem cell-derived cardiomyocytes demonstrated ERRg as having a key role in the transcriptional regulation of AF-associated genes. A polygenic risk score derived from the cross-ancestry meta-analysis predicted increased risks of cardiovascular and stroke mortalities and segregated individuals with cardioembolic stroke in undiagnosed AF patients. Our results provide new biological and clinical insights into AF genetics and suggest their potential for clinical applications."}
]

