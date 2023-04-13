import customFetch from "../../utils/axios";
import qs from "query-string";

export const requestPredictionThunk = async (_, thunkAPI) => {
  const prediction = thunkAPI.getState().prediction;
  const params = {
    loan_amnt: prediction.loan_amnt,
    term: prediction.term,
    emp_length: prediction.emp_length,
    home_ownership: prediction.home_ownership,
    annual_inc: prediction.annual_inc,
    purpose: prediction.purpose,
    dti: prediction.dti,
    delinq_2yrs: prediction.delinq_2yrs,
    cr_hist_age_mths: prediction.cr_hist_age_mths,
    fico_range_low: prediction.fico_range_low,
    fico_range_high: prediction.fico_range_high,
    inq_last_6mths: prediction.inq_last_6mths,
    inv_mths_since_last_delinq: prediction.inv_mths_since_last_delinq,
    inv_mths_since_last_record: prediction.inv_mths_since_last_record,
    open_acc: prediction.open_acc,
    pub_rec: prediction.pub_rec,
    revol_bal: prediction.revol_bal,
    revol_util: prediction.revol_util,
    total_acc: prediction.total_acc,
    collections_12_mths_ex_med: prediction.collections_12_mths_ex_med,
    inv_mths_since_last_major_derog: prediction.inv_mths_since_last_major_derog,
    application_type: prediction.application_type,
    annual_inc_joint: prediction.annual_inc_joint,
    dti_joint: prediction.dti_joint,
    acc_now_delinq: prediction.acc_now_delinq,
    tot_coll_amt: prediction.tot_coll_amt,
    tot_cur_bal: prediction.tot_cur_bal,
    total_rev_hi_lim: prediction.total_rev_hi_lim,
    acc_open_past_24mths: prediction.acc_open_past_24mths,
    avg_cur_bal: prediction.avg_cur_bal,
    bc_open_to_buy: prediction.bc_open_to_buy,
    bc_util: prediction.bc_util,
    chargeoff_within_12_mths: prediction.chargeoff_within_12_mths,
    delinq_amnt: prediction.delinq_amnt,
    mo_sin_old_il_acct: prediction.mo_sin_old_il_acct,
    mo_sin_old_rev_tl_op: prediction.mo_sin_old_rev_tl_op,
    inv_mo_sin_rcnt_rev_tl_op: prediction.inv_mo_sin_rcnt_rev_tl_op,
    inv_mo_sin_rcnt_tl: prediction.inv_mo_sin_rcnt_tl,
    mort_acc: prediction.mort_acc,
    inv_mths_since_recent_bc: prediction.inv_mths_since_recent_bc,
    inv_mths_since_recent_bc_dlq: prediction.inv_mths_since_recent_bc_dlq,
    inv_mths_since_recent_inq: prediction.inv_mths_since_recent_inq,
    inv_mths_since_recent_revol_delinq:
      prediction.inv_mths_since_recent_revol_delinq,
    num_accts_ever_120_pd: prediction.num_accts_ever_120_pd,
    num_actv_bc_tl: prediction.num_actv_bc_tl,
    num_actv_rev_tl: prediction.num_actv_rev_tl,
    num_bc_sats: prediction.num_bc_sats,
    num_bc_tl: prediction.num_bc_tl,
    num_il_tl: prediction.num_il_tl,
    num_op_rev_tl: prediction.num_op_rev_tl,
    num_rev_accts: prediction.num_rev_accts,
    num_rev_tl_bal_gt_0: prediction.num_rev_tl_bal_gt_0,
    num_sats: prediction.num_sats,
    num_tl_120dpd_2m: prediction.num_tl_120dpd_2m,
    num_tl_30dpd: prediction.num_tl_30dpd,
    num_tl_90g_dpd_24m: prediction.num_tl_90g_dpd_24m,
    num_tl_op_past_12m: prediction.num_tl_op_past_12m,
    pct_tl_nvr_dlq: prediction.pct_tl_nvr_dlq,
    percent_bc_gt_75: prediction.percent_bc_gt_75,
    pub_rec_bankruptcies: prediction.pub_rec_bankruptcies,
    tax_liens: prediction.tax_liens,
    tot_hi_cred_lim: prediction.tot_hi_cred_lim,
    total_bal_ex_mort: prediction.total_bal_ex_mort,
    total_bc_limit: prediction.total_bc_limit,
    total_il_high_credit_limit: prediction.total_il_high_credit_limit,
  };
  const queryString = qs.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });
  const url = `/api/predict?${queryString}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
