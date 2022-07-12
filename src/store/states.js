// import date from '../../src/assets/date.png'
const state = {
  currentPage: 2,
  forms: [],
  ProgressBar: [
    {
      stepPage: 1,
      icon: require("../../src/assets/progess/check.png"),
      alt: "progressBar",
    },
    {
      stepPage: 2,
      icon: require("../../src/assets/progess/edit.png"),
      alt: "progressBar",
    },
    {
      stepPage: 3,
      icon: require("../../src/assets/progess/check.png"),
      alt: "progressBar",
    },
    {
      stepPage: 4,
      icon: require("../../src/assets/progess/edit.png"),
      alt: "progressBar",
    },
    {
      stepPage: 5,
      icon: require("../../src/assets/progess/check.png"),
      alt: "progressBar",
    },
  ],
  formLists: [
    {
      form2: [
        {
          id: 1,
          name: "sigin",
          title: "基本情報登録",
          description:
            "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
          forms: [
            {
              id: 1,
              lable: " 姓",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: " 名",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: " セイ",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: " メイ",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 5,
              lable: " 姓（ローマ字）",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 6,
              lable: " 名（ローマ字）",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 7,
              lable: " 名（ローマ字）",
              required: "必須",
              messageError: "",
              input: {
                type: "radio",
                value: "female",
                placeholder: "テキストテキス",
              },
              status: false,
              radios: [
                {
                  id: 1,
                  type: "radio",
                  value: "female",
                  lable: "男性",
                },
                {
                  id: 2,
                  type: "radio",
                  value: "male",
                  lable: "女性",
                },
              ],
            },
            {
              id: 8,
              lable: " 生年月日",
              required: "必須",
              input: {
                value: "",
                type: "date",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 9,
              lable: "年齢",
              // input: {
              //   value: "",
              //   type: "text",
              //   placeholder: "生年月日を入力すると表示されます",
              // },
              messageError: "",
              status: false,
            },
            {
              id: 10,
              lable: "ビジネスネーム",
              // input: {
              //   value: "",
              //   type: "text",
              //   placeholder: "旧姓を利用する等の場合に入力をしてください。",
              // },
              messageError: "",
              status: false,
            },
            {
              id: 11,
              lable: "ビジネスネーム",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
          ],
        },
        {
          id: 2,
          name: "education",
          title: "最終学歴",
          description:
            "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
          education: "学歴1",
          forms: [
            {
              id: 1,
              lable: " 入学年月日",
              required: "必須",
              input: {
                value: "",
                type: "date",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: " 卒業年月日",
              required: "必須",
              input: {
                value: "",
                type: "date",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: " 学歴区分",
              required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "テキストテキス",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: " 学校名",
              required: "必須",
              input: {
                value: "",
                type: "seach",
                placeholder: "テキストテキス",
                icon: "./assets/education/input-seach.png",
              },
              messageError: "",
              status: false,
            },
            {
              id: 5,
              lable: " 学部名",
              required: "",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              status: false,
              messageError: "",
            },
          ],
        },

        {
          id: 3,
          name: "insurance",
          title: "保険年金",
          forms: [
            {
              id: 1,
              lable: " 基礎年金番号",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: " 雇用保険被保険者番号",
              default: "番号をお持ちの方は必ず入力してください",
              // required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: " 前職会社名",
              default: "雇用保険番号が不明の場合は入力をしてください",
              // required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: " 資格証明書類（年金手帳）",
              default: "年金手帳の写真を添付してください",
              // required: "必須",
              input: {
                value: "",
                type: "file",
                placeholder: "ファイルをドラッグ&ドロップ",
              },
              messageError: "",
              status: false,
            },
            {
              id: 5,
              lable: " 資格署名書類（雇用保険被保険者証）",
              default: "雇用保険被保険者証の写真を添付してください",
              // required: "必須",
              input: {
                value: "",
                type: "file",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 6,
              lable: " 名（ローマ字）",
              messageError: "",
              input: {
                type: "radio",
                value: "female",
                placeholder: "テキストテキス",
              },
              status: false,
              radios: [
                {
                  id: 1,
                  type: "radio",
                  value: "female",
                  lable: "男性",
                },
                {
                  id: 2,
                  type: "radio",
                  value: "male",
                  lable: "女性",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: "salary",
          title: "給与振込口座",
          forms: [
            {
              id: 1,
              lable: " 金融機関をフリーワードで検索",
              required: "必須",
              default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 1,
              lable: " 金融機関をフリーワードで検索",
              required: "必須",
              // default: "口座預金科目",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: " 支店名をフリーワードで検索",
              required: "必須",
              default: "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "フリーワードで検索できます",
              },
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: " 口座番号（半角）",
              required: "必須",
              // default: "普通",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: " 口座名義（カタカナ）",
              required: "必須",
              default: "本人名義に限ります",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
          ],
        },
        {
          id: 5,
          name: "resident",
          title: "在留カード（外国籍の方はご記入ください",
          forms: [
            {
              id: 1,
              lable: " 外国籍の方はチェックを入れてください",
              // required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: false,
                type: "checkbox",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: "姓（ローマ字）",
              required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "入力してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: "名（ローマ字）",
              required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "入力してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: "姓（カナ）",
              required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "入力してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 5,
              lable: "名（カナ）",
              required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "入力してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 6,
              lable: "名（カナ） ",
              required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "text",
                placeholder: "入力してください",
              },
              messageError: "",
              status: false,
            },

            {
              id: 7,
              lable: " 国籍",
              required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "テキストテキス",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 8,
              lable: " 在留資格",
              // required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "テキストテキス",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 9,
              lable: "在留期間（満了日）",
              // required: "必須",
              // default: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
              input: {
                value: "",
                type: "date",
                placeholder: "選択してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 10,
              lable: " 資格外活動許可",
              // required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "選択してください",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 11,
              lable: " 就労区分",
              // required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "選択してください",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },

            {
              id: 12,
              lable: " 資格外活動許可",
              // required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "選択してください",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 13,
              lable: " 在留カード番号（半角）",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "選択してください",
              },

              messageError: "",
              status: false,
            },

            {
              id: 14,
              lable: "在留カードの写真（表）",
              // required: "必須",
              default: "カードの表の写真を添付してください。",
              input: {
                value: "",
                type: "file",
                placeholder: "選択してください",
              },
              messageError: "",
              status: false,
            },
            {
              id: 15,
              lable: "在留カードの写真（裏）",
              // required: "必須",
              default: "カードの裏の写真を添付してください。",
              input: {
                value: "",
                type: "file",
                placeholder: "選択してください",
              },
              messageError: "",
              status: false,
            },
          ],
        },
        {
          id: 6,
          name: "siginAddress",
          title: "現住所を登録",
          forms: [
            {
              id: 1,
              lable: " 世帯主区分",
              required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "テキストテキス",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 2,
              lable: " 住居区分",
              required: "必須",
              input: {
                value: "",
                type: "select",
                placeholder: "テキストテキス",
              },
              slecteducations: [
                { name: "	", id: 1 },
                { name: "	東京大学 東京都 (	Đại học Tokyo)", id: 2 },
                { name: "	東北大学 宮城県 (	Đại học Tohoku)", id: 3 },
                { name: "	京都大学 京都府 (Đại học Kyoto)", id: 4 },
                { name: "		東京工業大学 (	Đại học Nagoya)", id: 5 },
                { name: "		九州大学 (		Viện Công nghệ Tokyo)", id: 6 },
                { name: "		北海道大学 (		Đại học Osaka)", id: 7 },
              ],
              messageError: "",
              status: false,
            },
            {
              id: 3,
              lable: " 都道府県",
              required: "必須",
              input: {
                value: "",
                type: "date",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 4,
              lable: " 市区町村",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 5,
              lable: " 番地",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 6,
              lable: " 建物名称・部屋番号",
              required: "必須",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 7,
              lable: " 電話番号（半角）",
              required: "どちらか 必須",
              default:
                "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
            {
              id: 8,
              lable: " 携帯電話番号（半角）",
              required: "どちらか 必須",
              default:
                "自宅電話番号が無い場合、携帯電話番号のみ登録してください。",
              input: {
                value: "",
                type: "text",
                placeholder: "テキストテキス",
              },
              messageError: "",
              status: false,
            },
          ],
        },
      ],
    },
  ],

  // resources: [
  //   { name: "		Đại học Tokyo", id: 1 },
  //   { name: "		Đại học Tohoku", id: 2 },
  //   { name: "	Đại học Kyoto", id: 3 },
  //   { name: "		Đại học Nagoya", id: 5 },
  //   { name: "				Viện Công nghệ Tokyo", id: 6 },
  //   { name: "			Đại học Osaka", id: 7 },
  // ],
  // resources: [
  //   { title: "aaa", uri: "aaaa.com", category: "a", icon: null },
  //   { title: "add", uri: "aaaa.com", category: "a", icon: null },
  //   { title: "aff", uri: "aaaa.com", category: "a", icon: null },
  //   { title: "bbb", uri: "bbbb.com", category: "b", icon: null },
  //   { title: "bdd", uri: "bbbb.com", category: "b", icon: null },
  //   { title: "bsb", uri: "bbbb.com", category: "b", icon: null },
  //   { title: "ccc", uri: "cccc.com", category: "c", icon: null },
  //   { title: "ddd", uri: "dddd.com", category: "d", icon: null },
  // ],
  resources: [
    {
      name: "University of Economics and Business (Trường Đại học Kinh tế)",
      value: "UEB",
    },
    {
      name: "University of Education (Trường Đại Học Giáo Dục)",
      value: "UED",
    },
    {
      name: "University of Languages and International Studies (Trường Đại học Ngoại ngữ)",
      value: "ULIS",
    },
    {
      name: "Hanoi University of Science (Trường Đại học Khoa học Tự nhiên)",
      value: "HUS",
    },
    {
      name: "University of Social Science and Humanity (Trường Đại học Khoa học Xã hội và Nhân văn)",
      value: "USSH",
    },
    {
      name: "University of Engineering and Technology (Trường Đại học Công nghệ)",
      value: "UET",
    },
    { name: "School of Law (Khoa Luật)", value: "USL" },
    { name: "School of Medicine and Pharmacy (Khoa Y Dược)", value: "UMP" },
    {
      name: "School of International Studies (Khoa Quốc tế)",
      value: "UIS",
    },
    {
      name: "School of Interdisciplinary Studies (Khoa các Khoa học liên ngành)",
      value: "UIS",
    },
  ],
};
export default state;
