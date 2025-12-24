const reportData = {
  studentName: "Harshil Khandelwal",
  testDate: "Oct 14, 2021",

  assessments: {
    english: {
      languageLabel: "English",
      overallScore: 7,
      overallFeedback:
        "Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses.",

      skills: [
        {
          key: "pronunciation",
          name: "Pronunciation",
          score: 8.5,
          feedback:
            "Uses a wide range of pronunciation features. Sustains flexible use of features, with only occasional lapses. Is easy to understand throughout."
        },
        {
          key: "fluency",
          name: "Fluency",
          score: 9,
          feedback:
            "Speaks fluently with only rare repetition or self-correction. Develops topics fully and appropriately."
        },
        {
          key: "vocabulary",
          name: "Vocabulary",
          score: 6,
          feedback:
            "Has a wide enough vocabulary to discuss topics at length and generally paraphrases successfully."
        },
        {
          key: "grammar",
          name: "Grammar",
          score: 6,
          feedback:
            "Uses a mix of simple and complex structures but with limited flexibility."
        }
      ]
    },

    hindi: {
      languageLabel: "Hindi",
      overallScore: 6,
      overallFeedback:
        "उच्चारण और प्रवाह संतोषजनक हैं, हालांकि कुछ स्थानों पर स्पष्टता में कमी देखी जाती है।",

      skills: [
        {
          key: "pronunciation",
          name: "उच्चारण",
          score: 6.5,
          feedback:
            "उच्चारण सामान्यतः स्पष्ट है, लेकिन कुछ शब्दों में मातृभाषा का प्रभाव दिखाई देता है।"
        },
        {
          key: "fluency",
          name: "प्रवाह",
          score: 6,
          feedback:
            "बोलते समय प्रवाह ठीक है, लेकिन कभी-कभी रुकावटें आती हैं।"
        },
        {
          key: "vocabulary",
          name: "शब्दावली",
          score: 5.5,
          feedback:
            "सामान्य विषयों पर चर्चा के लिए पर्याप्त शब्दावली है।"
        },
        {
          key: "grammar",
          name: "व्याकरण",
          score: 6,
          feedback:
            "सरल और जटिल वाक्य संरचनाओं का सीमित लेकिन प्रभावी उपयोग करता है।"
        }
      ]
    },

    french: {
      languageLabel: "French",
      overallScore: 8,
      overallFeedback:
        "Démontre une très bonne maîtrise de la langue avec une expression claire et confiante.",

      skills: [
        {
          key: "pronunciation",
          name: "Prononciation",
          score: 8,
          feedback:
            "Prononciation claire avec un très bon contrôle des sons."
        },
        {
          key: "fluency",
          name: "Fluidité",
          score: 7.5,
          feedback:
            "S’exprime de manière fluide avec une bonne cohérence."
        },
        {
          key: "vocabulary",
          name: "Vocabulaire",
          score: 8,
          feedback:
            "Utilise un vocabulaire varié et approprié au contexte."
        },
        {
          key: "grammar",
          name: "Grammaire",
          score: 7.5,
          feedback:
            "Bonne maîtrise des structures grammaticales avec peu d’erreurs."
        }
      ]
    },

    spanish: {
      languageLabel: "Spanish",
      overallScore: 6.5,
      overallFeedback:
        "Comunica ideas de forma clara, aunque con algunas imprecisiones ocasionales.",

      skills: [
        {
          key: "pronunciation",
          name: "Pronunciación",
          score: 6.5,
          feedback:
            "La pronunciación es generalmente clara con pequeños errores."
        },
        {
          key: "fluency",
          name: "Fluidez",
          score: 6,
          feedback:
            "Habla con fluidez moderada y algunas pausas."
        },
        {
          key: "vocabulary",
          name: "Vocabulario",
          score: 6.5,
          feedback:
            "Vocabulario suficiente para expresar ideas comunes."
        },
        {
          key: "grammar",
          name: "Gramática",
          score: 6,
          feedback:
            "Uso adecuado de estructuras básicas con errores ocasionales."
        }
      ]
    },

    german: {
      languageLabel: "German",
      overallScore: 7.5,
      overallFeedback:
        "Zeigt eine gute sprachliche Kontrolle und klare Ausdrucksweise.",

      skills: [
        {
          key: "pronunciation",
          name: "Aussprache",
          score: 7.5,
          feedback:
            "Aussprache ist klar und gut verständlich."
        },
        {
          key: "fluency",
          name: "Flüssigkeit",
          score: 7,
          feedback:
            "Spricht zusammenhängend mit wenigen Unterbrechungen."
        },
        {
          key: "vocabulary",
          name: "Wortschatz",
          score: 7.5,
          feedback:
            "Verwendet einen angemessenen und vielfältigen Wortschatz."
        },
        {
          key: "grammar",
          name: "Grammatik",
          score: 7,
          feedback:
            "Gute Kontrolle über grundlegende und komplexe Strukturen."
        }
      ]
    },

    japanese: {
      languageLabel: "Japanese",
      overallScore: 5.5,
      overallFeedback:
        "基本的な内容は伝えられますが、表現力には改善の余地があります。",

      skills: [
        {
          key: "pronunciation",
          name: "発音",
          score: 5.5,
          feedback:
            "発音は概ね理解可能ですが、不自然な箇所があります。"
        },
        {
          key: "fluency",
          name: "流暢さ",
          score: 5,
          feedback:
            "話す際にためらいが見られます。"
        },
        {
          key: "vocabulary",
          name: "語彙",
          score: 5.5,
          feedback:
            "基本的な語彙は使用できますが範囲は限定的です。"
        },
        {
          key: "grammar",
          name: "文法",
          score: 5,
          feedback:
            "基本的な文法構造に不安定さがあります。"
        }
      ]
    }
  }
};

export default reportData;
