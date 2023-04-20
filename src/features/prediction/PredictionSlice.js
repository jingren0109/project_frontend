import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { requestPredictionThunk } from "./predictionThunk";

const initialState = {
  isLoading: false,
  loan_amnt: "",
  term: "36 months",
  term_options: ["36 months", "60 months"],
  emp_length: "1 year",
  emp_length_options: [
    "< 1 year",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10+ years",
  ],
  home_ownership: "RENT",
  home_ownership_options: ["RENT", "MORTGAGE", "OWN", "ANY", "NONE", "OTHER"],
  annual_inc: "",
  purpose: "car",
  purpose_options: [
    "car",
    "credit_card",
    "debt_consolidation",
    "educational",
    "home_improvement",
    "house",
    "major_purchase",
    "medical",
    "moving",
    "renewable_energy",
    "amall_business",
    "vacation",
    "qedding",
    "other",
  ],
  dti: "",
  delinq_2yrs: "",
  cr_hist_age_mths: "",
  fico_range_low: "",
  fico_range_high: "",
  inq_last_6mths: "",
  inv_mths_since_last_delinq: "",
  inv_mths_since_last_record: "",
  open_acc: "",
  pub_rec: "",
  revol_bal: "",
  revol_util: "",
  total_acc: "",
  collections_12_mths_ex_med: "",
  inv_mths_since_last_major_derog: "",
  application_type: "Individual",
  application_type_options: ["Individual", "Joint app"],
  annual_inc_joint: "N/A",
  dti_joint: "N/A",
  acc_now_delinq: "",
  tot_coll_amt: "",
  tot_cur_bal: "",
  total_rev_hi_lim: "",
  acc_open_past_24mths: "",
  avg_cur_bal: "",
  bc_open_to_buy: "",
  bc_util: "",
  chargeoff_within_12_mths: "",
  delinq_amnt: "",
  mo_sin_old_il_acct: "",
  mo_sin_old_rev_tl_op: "",
  inv_mo_sin_rcnt_rev_tl_op: "",
  inv_mo_sin_rcnt_tl: "",
  mort_acc: "",
  inv_mths_since_recent_bc: "",
  inv_mths_since_recent_bc_dlq: "",
  inv_mths_since_recent_inq: "",
  inv_mths_since_recent_revol_delinq: "",
  num_accts_ever_120_pd: "",
  num_actv_bc_tl: "",
  num_actv_rev_tl: "",
  num_bc_sats: "",
  num_bc_tl: "",
  num_il_tl: "",
  num_op_rev_tl: "",
  num_rev_accts: "",
  num_rev_tl_bal_gt_0: "",
  num_sats: "",
  num_tl_120dpd_2m: "",
  num_tl_30dpd: "",
  num_tl_90g_dpd_24m: "",
  num_tl_op_past_12m: "",
  pct_tl_nvr_dlq: "",
  percent_bc_gt_75: "",
  pub_rec_bankruptcies: "",
  tax_liens: "",
  tot_hi_cred_lim: "",
  total_bal_ex_mort: "",
  total_bc_limit: "",
  total_il_high_credit_limit: "",
  prediction_result: "",
};

const fullPaiedState = {
  ...initialState,
  loan_amnt: "12000",
  term: "36 months",
  emp_length: "10+ years",
  home_ownership: "MORTGAGE",
  annual_inc: "68000",
  purpose: "debt_consolidation",
  dti: "17.4",
  delinq_2yrs: "0",
  cr_hist_age_mths: "178",
  fico_range_low: "690",
  fico_range_high: "694",
  inq_last_6mths: "0",
  inv_mths_since_last_delinq: "80",
  inv_mths_since_last_record: "N/A",
  open_acc: "11",
  pub_rec: "0",
  revol_bal: "11510",
  revol_util: "51.3",
  total_acc: "24",
  collections_12_mths_ex_med: "0",
  inv_mths_since_last_major_derog: "N/A",
  application_type: "Individual",
  annual_inc_joint: "N/A",
  dti_joint: "N/A",
  acc_now_delinq: "0",
  tot_coll_amt: "0",
  tot_cur_bal: "94349",
  total_rev_hi_lim: "25200",
  acc_open_past_24mths: "4",
  avg_cur_bal: "8422",
  bc_open_to_buy: "5229",
  bc_util: "61.7",
  chargeoff_within_12_mths: "0",
  delinq_amnt: "0",
  mo_sin_old_il_acct: "129",
  mo_sin_old_rev_tl_op: "164",
  inv_mo_sin_rcnt_rev_tl_op: "8",
  inv_mo_sin_rcnt_tl: "6",
  mort_acc: "1",
  inv_mths_since_recent_bc: "6",
  inv_mths_since_recent_bc_dlq: "N/A",
  inv_mths_since_recent_inq: "6",
  inv_mths_since_recent_revol_delinq: "N/A",
  num_accts_ever_120_pd: "0",
  num_actv_bc_tl: "3",
  num_actv_rev_tl: "5",
  num_bc_sats: "4",
  num_bc_tl: "7",
  num_il_tl: "7",
  num_op_rev_tl: "7",
  num_rev_accts: "13",
  num_rev_tl_bal_gt_0: "5",
  num_sats: "11",
  num_tl_120dpd_2m: "0",
  num_tl_30dpd: "0",
  num_tl_90g_dpd_24m: "0",
  num_tl_op_past_12m: "2",
  pct_tl_nvr_dlq: "98.2",
  percent_bc_gt_75: "40",
  pub_rec_bankruptcies: "0",
  tax_liens: "0",
  tot_hi_cred_lim: "128354",
  total_bal_ex_mort: "39254",
  total_bc_limit: "16100",
  total_il_high_credit_limit: "33729",
};

const chargedOffState = {
  ...initialState,
  loan_amnt: "28000",
  term: "60 months",
  emp_length: "10+ years",
  home_ownership: "RENT",
  annual_inc: "60000",
  purpose: "debt_consolidation",
  dti: "47.24",
  delinq_2yrs: "0",
  cr_hist_age_mths: "123",
  fico_range_low: "487",
  fico_range_high: "565",
  inq_last_6mths: "1",
  inv_mths_since_last_delinq: "N/A",
  inv_mths_since_last_record: "99",
  open_acc: "19",
  pub_rec: "1",
  revol_bal: "30092",
  revol_util: "65",
  total_acc: "27",
  collections_12_mths_ex_med: "0",
  inv_mths_since_last_major_derog: "N/A",
  application_type: "Individual",
  annual_inc_joint: "N/A",
  dti_joint: "N/A",
  acc_now_delinq: "0",
  tot_coll_amt: "0",
  tot_cur_bal: "85679",
  total_rev_hi_lim: "46300",
  acc_open_past_24mths: "12",
  avg_cur_bal: "4509",
  bc_open_to_buy: "6048",
  bc_util: "71.3",
  chargeoff_within_12_mths: "0",
  delinq_amnt: "0",
  mo_sin_old_il_acct: "123",
  mo_sin_old_rev_tl_op: "63",
  inv_mo_sin_rcnt_rev_tl_op: "13",
  inv_mo_sin_rcnt_tl: "6",
  mort_acc: "0",
  inv_mths_since_recent_bc: "13",
  inv_mths_since_recent_bc_dlq: "N/A",
  inv_mths_since_recent_inq: "6",
  inv_mths_since_recent_revol_delinq: "N/A",
  num_accts_ever_120_pd: "0",
  num_actv_bc_tl: "6",
  num_actv_rev_tl: "12",
  num_bc_sats: "7",
  num_bc_tl: "9",
  num_il_tl: "10",
  num_op_rev_tl: "15",
  num_rev_accts: "17",
  num_rev_tl_bal_gt_0: "12",
  num_sats: "19",
  num_tl_120dpd_2m: "0",
  num_tl_30dpd: "0",
  num_tl_90g_dpd_24m: "0",
  num_tl_op_past_12m: "2",
  pct_tl_nvr_dlq: "100",
  percent_bc_gt_75: "28.6",
  pub_rec_bankruptcies: "1",
  tax_liens: "0",
  tot_hi_cred_lim: "110455",
  total_bal_ex_mort: "85679",
  total_bc_limit: "21100",
  total_il_high_credit_limit: "64155",
};

export const createPrediction = createAsyncThunk(
  "prediction/predict",
  requestPredictionThunk
);

const predictionSlice = createSlice({
  name: "prediction",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
      if (name === "loan_amnt" || name === "annual_inc") {
        const loanAmnt = parseFloat(state.loan_amnt);
        const annualInc = parseFloat(state.annual_inc);
        if (!isNaN(loanAmnt) && !isNaN(annualInc)) {
          state.dti = ((loanAmnt / annualInc) * 100).toFixed(2);
        }
      }
      if (name === "application_type") {
        if (value === "Joint app") {
          state.annual_inc_joint = "";
          state.dti_joint = "";
        } else {
          state.annual_inc_joint = "N/A";
          state.dti_joint = "N/A";
        }
      }
      if (name === "loan_amnt" || name === "annual_inc_joint") {
        const loanAmnt = parseFloat(state.loan_amnt);
        const annualIncJoint = parseFloat(state.annual_inc_joint);
        if (!isNaN(loanAmnt) && !isNaN(annualIncJoint)) {
          state.dti_joint = ((loanAmnt / annualIncJoint) * 100).toFixed(2);
        }
      }
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    fullPaiedValues: () => {
      return {
        ...fullPaiedState,
      };
    },
    chargedOffValues: () => {
      return {
        ...chargedOffState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPrediction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPrediction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.prediction_result = payload;
        toast.success("Prediction Success");
      })
      .addCase(createPrediction.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, fullPaiedValues, chargedOffValues } =
  predictionSlice.actions;

export default predictionSlice.reducer;
