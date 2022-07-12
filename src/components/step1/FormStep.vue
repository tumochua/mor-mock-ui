<template>
  <div class="formStep1-ctn">
    <date-vue></date-vue>
    <div class="formStep1">
      <confirm-vue>
        <template v-slot:title>
          <div class="confirm-title">
            {{ formStep1.confirm }}
          </div>
        </template>
        <div class="confirm-description">
          {{ formStep1.description }}
        </div>
      </confirm-vue>
      <div class="contract">
        <label class="contract-tile">{{ formStep1.dateContract.lable }}</label>
        <br />
        <input
          type="text"
          v-model="formStep1.dateContract.value"
          :placeholder="formStep1.dateContract.placeholder"
          class="form-conntrol"
        />
      </div>
      <div class="task-form">
        <div class="task-form-title">{{ formStep1.taskForm.title }}</div>
        <div
          v-for="taskForm in formStep1.taskForm.taskItems"
          :key="taskForm.id"
          class="task-form-items"
        >
          <div class="task-form-item">
            <label class="task-form-item-lable">{{ taskForm.lable }}</label>
            <br />
            <div class="task-form-item-description">
              {{ taskForm.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="task-form">
        <div class="task-form-title">
          {{ formStep1.workingConditions.title }}
        </div>
        <div
          v-for="WorkingCondition in formStep1.workingConditions.workings"
          :key="WorkingCondition.id"
          class="task-form-items"
        >
          <div class="task-form-item">
            <label>{{ WorkingCondition.lable }}</label> <br />
            <div>{{ WorkingCondition.description }}</div>
          </div>
        </div>
      </div>
      <div class="task-form">
        <div class="task-form-title">
          {{ formStep1.rewardConditions.title }}
        </div>
        <div
          v-for="WorkingCondition in formStep1.rewardConditions.conditions"
          :key="WorkingCondition.id"
          class="task-form-items"
        >
          <div class="task-form-item">
            <label>{{ WorkingCondition.lable }}</label> <br />
            <div>{{ WorkingCondition.description || "" }}</div>
          </div>
        </div>
        <div
          v-for="WorkingCondition in formStep1.rewardConditions.subsidizes"
          :key="WorkingCondition.id"
          class="task-form-items"
        >
          <div class="task-form-item">
            <label>{{
              WorkingCondition.lable || WorkingCondition.subsidize
            }}</label>
            <br />
            <div>{{ WorkingCondition.description || "" }}</div>
          </div>
        </div>
      </div>
      <div class="task-form">
        <div class="task-form-items">
          <div class="task-form-title">{{ formStep1.salaryDate.title }}</div>
          <div class="task-form-item">{{ formStep1.salaryDate.lable }}</div>
        </div>
      </div>
      <div class="task-form">
        <div class="task-form-title">
          {{ formStep1.system.title }}
        </div>
        <div
          v-for="WorkingCondition in formStep1.system.systems"
          :key="WorkingCondition.id"
          class="task-form-items"
        >
          <div class="task-form-item">
            <label>{{ WorkingCondition.lable }}</label> <br />
          </div>
        </div>
      </div>
      <div class="declaration-ctn">
        <div class="task-form-title">
          {{ formStep1.declaration.title }}
        </div>
        <div class="declaration">
          <div
            v-for="WorkingCondition in formStep1.declaration.declarations"
            :key="WorkingCondition.id"
          >
            <div class="declaration-ctn-text">
              <div class="declaration-number">{{ WorkingCondition.id }}</div>
              <label>{{ WorkingCondition.lable }}</label> <br />
            </div>
          </div>
        </div>
        <div class="confirm-checkbox">
          <label class="lableRequired">必須</label> <br />
          <lable class="checkbox-item">
            <input
              type="checkbox"
              v-model="confirmCheckBox"
              class="checkbox-item-checkbox"
            />
            同意する場合はチェックをしてください
          </lable>
          <p v-if="errorCheckbox" class="errr-checkbox">
            このフィールドは必須です
          </p>
        </div>
      </div>
      <div class="contact-step1">
        <img
          src="../../assets/Confirm/chat-info.png"
          alt="contact"
          class="contact-step1-icon"
        />
        <p>
          雇用契約や入社手続きについて <br />
          ご不明点はお問い合わせください
        </p>
      </div>
    </div>
    <button @click="handleNext" class="btn-next">入社手続きの入力に進む</button>
  </div>
</template>

<script>
import ConfirmVue from "../slot/Confirm.vue";
// import ProgressBarVue from "../ProgressBar.vue";
import DateVue from "../slot/Date.vue";
export default {
  name: "FormStep",
  components: {
    ConfirmVue,
    // ProgressBarVue,
    DateVue,
  },
  data() {
    return {
      confirmCheckBox: false,
      errorCheckbox: false,
      formStep1: {
        title: "雇用契約について",
        confirm: "ご確認ください",
        description:
          " 表示されている内容を確認いただき、認識に相違が無ければ同意するにチェックをしてください。",
        dateContract: {
          lable: "雇用契約期間の定め",
          placeholder: "契約期間の定め：なし",
          value: "",
        },
        taskForm: {
          title: "勤務地",
          taskItems: [
            {
              id: 1,
              lable: "事業所名",
              description: "テキストテキストテキストテキストテキストテキスト",
            },
            {
              id: 2,
              lable: "事業所在地",
              description: "テキストテキストテキストテキストテキストテキスト",
            },
            {
              id: 3,
              lable: "仕事内容",
              description: "テキストテキストテキストテキストテキストテキスト",
            },
          ],
        },
        workingConditions: {
          title: "勤務条件",
          workings: [
            {
              id: 1,
              lable: "勤務区分",
              description: "固定勤務",
            },
            {
              id: 2,
              lable: "勤務開始時間：09:00　勤務終了時間:18:00　休憩時間：120分",
              description:
                "1週間の勤務日数（1ヶ月平均）：5日　休日：土日祝日、年末年始",
            },
            {
              id: 3,
              lable:
                "所定労働時間（1日）：8時間　所定労働時間（1週間平均）：40時間",
              description: "労働時間選択区分：40時間",
            },
          ],
        },
        rewardConditions: {
          title: "報酬条件",
          conditions: [
            {
              id: 1,
              lable: "等級",
              description: "1等級",
            },
            {
              id: 2,
              lable: "基本給：200,000円　年齢給：200,000円　職能給：200,000円",
            },
            {
              id: 3,
              lable:
                "調整給：200,000円　調整給1：200,000円　調整給2：200,000円",
            },
          ],
          subsidizes: [
            {
              subsidize: "手当",
            },
            {
              id: 1,
              lable:
                "役職手当：200,000円　役職手当2：200,000円　役職手当3：200,000円",
            },
            {
              id: 2,
              lable:
                "資格手当：200,000円　住宅地域手当：200,000円　管理薬剤師手当：200,000円",
            },
            {
              id: 3,
              lable:
                "職務手当：200,000円　職務手当2：200,000円　職務手当3：200,000円",
            },
            {
              id: 4,
              lable:
                "ブロック手当：200,000円　フィールドマネジャー手当：200,000円　",
            },
            {
              id: 5,
              lable: "単身赴任手当：200,000円　社員区分手当：200,000円　",
            },
            {
              id: 6,
              lable: "合計支給額",
              description: "200,000円",
            },
          ],
        },
        salaryDate: {
          title: "賃金の締日・支払日",
          lable: "賃金締日：毎月末日　賃金支払日：当月25日",
        },
        system: {
          title: "制度",
          systems: [
            {
              id: 1,
              lable: "昇給：あり　賞与：あり　退職金：あり",
            },
            {
              id: 2,
              lable:
                "健康保険：加入する　厚生年金保険：加入する　雇用保険：加入する",
            },
            {
              id: 3,
              lable: "定年制：あり　再雇用制度：ある　契約の更新：あり",
            },
          ],
        },
        declaration: {
          title: "誓約書",
          declarations: [
            {
              id: 1,
              lable:
                "  私は アイングループ（以下 「 会社 」 という。）の就業規則等の諸規則　諸規定を遵守し、誠実に職務に従事いたします。",
            },
            {
              id: 2,
              lable:
                "履歴書およびその他の提出書類の記載事項は事実に相違ありません。貴社の社員としての体面を汚すような行為はいたしません。",
            },
            {
              id: 3,
              lable:
                "会社 の業務 に関連して知りえた個人情報、企業情報（取引先・患者様・お客様 に関する情報、人事・財務・関連会社・紛争に関する情報、その他会社が秘密として指定する情報を含む。）、については、在職中はもとよりのこと、会社退職後であっても会社の許可なくして自ら使用し、又は第三者に       　　開示するなど漏洩いたしません。",
            },
            {
              id: 4,
              lable:
                "会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・資料・帳簿等（フロッピー、ＭＯその他記録媒体の如何を問わない。）は、情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、会社退職時には、これら総てを会社に返還いたします。",
            },
            {
              id: 5,
              lable:
                "会社在職中、私が保管・作成・従事を命じられた会社の個人情報・諸文書・資料・帳簿等（フロッピー、ＭＯその他記録媒体の如何を問わない。）は、情報管理者の監督のもと、責任をもって保管し、第三者に譲渡・漏洩せず、会社退職時には、これら総てを会社に返還いたします。",
            },
            {
              id: 6,
              lable:
                "職務中に知り得た第三者の個人情報につき、その情報管理者の承諾なくして自ら使用し、又は第三者に開示・漏洩いたしません。           ",
            },
            {
              id: 7,
              lable:
                "故意または重大な過失により貴社に損害を及ぼしたときは、その損害について賠償の責任を負います。 ",
            },
          ],
        },
      },
    };
  },
  methods: {
    handleNext() {
      console.log("checK : ", this.confirmCheckBox);
      if (this.confirmCheckBox) {
        this.$store.dispatch("HANLDE_NEXT");
        this.errorCheckbox = false;
      } else {
        this.errorCheckbox = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.formStep1-ctn {
  margin-bottom: 100px;
  .formStep1 {
    .confirm-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 42px;
      color: #333333;
    }
    .confirm-description {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }
    .contract {
      padding: 16px;
      margin: 28px 0px 4px 0px;
      background-color: #f1f2f7;

      .contract-tile {
        font-weight: 400;
        font-size: 18px;
        line-height: 42px;
        color: #333333;
      }
      .form-conntrol {
        margin-top: 8px;
        padding: 10px;
        width: 90%;
        border-radius: 4px;
        border: 1px solid #dcdcdc;
        outline: none;
      }
    }
    .task-form {
      background-color: #f1f2f7;
      margin-bottom: 16px;
      .task-form-title {
        margin-left: 18px;
        font-weight: 400;
        font-size: 18px;
        line-height: 42px;
      }

      .task-form-items {
        padding: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 42px;
        .task-form-item {
          border-radius: 4px;
          padding: 16px;
          background-color: #ffffff;
          line-height: 24px;
        }
      }
    }
    .declaration-ctn {
      background-color: #f1f2f7;
      margin-bottom: 16px;
      padding: 16px;
      .task-form-title {
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 18px;
        line-height: 42px;
        color: #333333;
      }
      .declaration {
        padding: 16px;
        background-color: #ffffff;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        .declaration-ctn-text {
          display: flex;
          .declaration-number {
            margin-right: 10px;
          }
        }
      }
    }
    .confirm-checkbox {
      margin-top: 20px;
      .checkbox-item {
        display: flex;
      }
      .checkbox-item-checkbox {
        margin-right: 10px;
      }
      .errr-checkbox {
        color: red;
      }
    }
    .contact-step1 {
      display: flex;
      background-color: #f1f2f7;
      margin: 16px 0px;
      .contact-step1-icon {
        object-fit: contain;
      }
    }
  }
  .btn-next {
    width: 100%;
    cursor: pointer;
    padding: 12px 10px;
    background-color: #b2b1ff;
    border: none;
    border-radius: 4px;
    color: #ffffff;
  }
}
</style>
