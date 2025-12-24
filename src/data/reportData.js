const reportData = {
  studentName: "Harshil Khandelwal",
  testDate: "Dec 24, 2025",

  assessments: {
    english: {
      label: "English",
      overallScore: 7,
      overallFeedback:
        "Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses.",
      skills: [
        { name: "Pronunciation", score: 8.5, feedback: "Clear pronunciation with minor lapses." },
        { name: "Fluency", score: 9, feedback: "Speaks fluently with excellent coherence." },
        { name: "Vocabulary", score: 6, feedback: "Adequate vocabulary with some limitations." },
        { name: "Grammar", score: 6, feedback: "Uses basic and complex structures with errors." }
      ]
    },

    hindi: {
      label: "Hindi",
      overallScore: 6,
      overallFeedback:
        "सामान्य प्रवाह और स्पष्टता के साथ संवाद करता है, लेकिन सुधार की गुंजाइश है।",
      skills: [
        { name: "उच्चारण", score: 6.5, feedback: "उच्चारण सामान्यतः स्पष्ट है।" },
        { name: "प्रवाह", score: 6, feedback: "कभी-कभी रुकावट आती है।" },
        { name: "शब्दावली", score: 5.5, feedback: "सीमित शब्दावली।" },
        { name: "व्याकरण", score: 6, feedback: "सरल संरचनाओं में अच्छा नियंत्रण।" }
      ]
    },

    french: {
      label: "French",
      overallScore: 8,
      overallFeedback:
        "Très bonne maîtrise de la langue avec une expression confiante.",
      skills: [
        { name: "Prononciation", score: 8, feedback: "Prononciation claire." },
        { name: "Fluidité", score: 7.5, feedback: "Expression fluide." },
        { name: "Vocabulaire", score: 8, feedback: "Vocabulaire riche." },
        { name: "Grammaire", score: 7.5, feedback: "Bonne maîtrise grammaticale." }
      ]
    },

    spanish: {
      label: "Spanish",
      overallScore: 6.5,
      overallFeedback:
        "Comunicación clara con algunas imprecisiones.",
      skills: [
        { name: "Pronunciación", score: 6.5, feedback: "Pronunciación adecuada." },
        { name: "Fluidez", score: 6, feedback: "Fluidez moderada." },
        { name: "Vocabulario", score: 6.5, feedback: "Vocabulario suficiente." },
        { name: "Gramática", score: 6, feedback: "Errores ocasionales." }
      ]
    },

    german: {
      label: "German",
      overallScore: 7.5,
      overallFeedback:
        "Gute Kontrolle über Sprache und Ausdruck.",
      skills: [
        { name: "Aussprache", score: 7.5, feedback: "Klar und verständlich." },
        { name: "Flüssigkeit", score: 7, feedback: "Guter Redefluss." },
        { name: "Wortschatz", score: 7.5, feedback: "Angemessener Wortschatz." },
        { name: "Grammatik", score: 7, feedback: "Gute Strukturkontrolle." }
      ]
    },

    japanese: {
      label: "Japanese",
      overallScore: 5.5,
      overallFeedback:
        "基本的な意思疎通は可能ですが、改善が必要です。",
      skills: [
        { name: "発音", score: 5.5, feedback: "やや不自然な発音。" },
        { name: "流暢さ", score: 5, feedback: "話す速度が遅い。" },
        { name: "語彙", score: 5.5, feedback: "語彙が限定的。" },
        { name: "文法", score: 5, feedback: "文法ミスが多い。" }
      ]
    }
  }
};

export default reportData;
