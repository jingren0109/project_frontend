import customFetch from "../../utils/axios";

export const requestPredictionThunk = async (_, thunkAPI) => {
  const prediction = thunkAPI.getState().prediction;
  const params = [
    `loan_amnt=${encodeURIComponent(prediction.loan_amnt)}`,
    `term=${encodeURIComponent(prediction.term)}`,
    `emp_length=${encodeURIComponent(prediction.emp_length)}`,
    `home_ownership=${encodeURIComponent(prediction.home_ownership)}`,
    `annual_inc=${encodeURIComponent(prediction.annual_inc)}`,
    `purpose=${encodeURIComponent(prediction.purpose)}`,
    `dti=${encodeURIComponent(prediction.dti)}`,
    `delinq_2yrs=${encodeURIComponent(prediction.delinq_2yrs)}`,
    `cr_hist_age_mths=${encodeURIComponent(prediction.cr_hist_age_mths)}`,
    `fico_range_low=${encodeURIComponent(prediction.fico_range_low)}`,
    `fico_range_high=${encodeURIComponent(prediction.fico_range_high)}`,
    `inq_last_6mths=${encodeURIComponent(prediction.inq_last_6mths)}`,
    `inv_mths_since_last_delinq=${encodeURIComponent(
      prediction.inv_mths_since_last_delinq
    )}`,
    `inv_mths_since_last_record=${encodeURIComponent(
      prediction.inv_mths_since_last_record
    )}`,
    `open_acc=${encodeURIComponent(prediction.open_acc)}`,
    `pub_rec=${encodeURIComponent(prediction.pub_rec)}`,
    `revol_bal=${encodeURIComponent(prediction.revol_bal)}`,
    `revol_util=${encodeURIComponent(prediction.revol_util)}`,
    `total_acc=${encodeURIComponent(prediction.total_acc)}`,
    `collections_12_mths_ex_med=${encodeURIComponent(
      prediction.collections_12_mths_ex_med
    )}`,
    `inv_mths_since_last_major_derog=${encodeURIComponent(
      prediction.inv_mths_since_last_major_derog
    )}`,
    `application_type=${encodeURIComponent(prediction.application_type)}`,
    `annual_inc_joint=${encodeURIComponent(prediction.annual_inc_joint)}`,
    `dti_joint=${encodeURIComponent(prediction.dti_joint)}`,
    `acc_now_delinq=${encodeURIComponent(prediction.acc_now_delinq)}`,
    `tot_coll_amt=${encodeURIComponent(prediction.tot_coll_amt)}`,
    `tot_cur_bal=${encodeURIComponent(prediction.tot_cur_bal)}`,
    `total_rev_hi_lim=${encodeURIComponent(prediction.total_rev_hi_lim)}`,
    `acc_open_past_24mths=${encodeURIComponent(
      prediction.acc_open_past_24mths
    )}`,
    `avg_cur_bal=${encodeURIComponent(prediction.avg_cur_bal)}`,
    `bc_open_to_buy=${encodeURIComponent(prediction.bc_open_to_buy)}`,
    `bc_util=${encodeURIComponent(prediction.bc_util)}`,
    `chargeoff_within_12_mths=${encodeURIComponent(
      prediction.chargeoff_within_12_mths
    )}`,
    `delinq_amnt=${encodeURIComponent(prediction.delinq_amnt)}`,
    `mo_sin_old_il_acct=${encodeURIComponent(prediction.mo_sin_old_il_acct)}`,
    `mo_sin_old_rev_tl_op=${encodeURIComponent(
      prediction.mo_sin_old_rev_tl_op
    )}`,
    `inv_mo_sin_rcnt_rev_tl_op=${encodeURIComponent(
      prediction.inv_mo_sin_rcnt_rev_tl_op
    )}`,
    `inv_mo_sin_rcnt_tl=${encodeURIComponent(prediction.inv_mo_sin_rcnt_tl)}`,
    `mort_acc=${encodeURIComponent(prediction.mort_acc)}`,
    `inv_mths_since_recent_bc=${encodeURIComponent(
      prediction.inv_mths_since_recent_bc
    )}`,
    `inv_mths_since_recent_bc_dlq=${encodeURIComponent(
      prediction.inv_mths_since_recent_bc_dlq
    )}`,
    `inv_mths_since_recent_inq=${encodeURIComponent(
      prediction.inv_mths_since_recent_inq
    )}`,
    `inv_mths_since_recent_revol_delinq=${encodeURIComponent(
      prediction.inv_mths_since_recent_revol_delinq
    )}`,
    `num_accts_ever_120_pd=${encodeURIComponent(
      prediction.num_accts_ever_120_pd
    )}`,
    `num_actv_bc_tl=${encodeURIComponent(prediction.num_actv_bc_tl)}`,
    `num_actv_rev_tl=${encodeURIComponent(prediction.num_actv_rev_tl)}`,
    `num_bc_sats=${encodeURIComponent(prediction.num_bc_sats)}`,
    `num_bc_tl=${encodeURIComponent(prediction.num_bc_tl)}`,
    `num_il_tl=${encodeURIComponent(prediction.num_il_tl)}`,
    `num_op_rev_tl=${encodeURIComponent(prediction.num_op_rev_tl)}`,
    `num_rev_accts=${encodeURIComponent(prediction.num_rev_accts)}`,
    `num_rev_tl_bal_gt_0=${encodeURIComponent(prediction.num_rev_tl_bal_gt_0)}`,
    `num_sats=${encodeURIComponent(prediction.num_sats)}`,
    `num_tl_120dpd_2m=${encodeURIComponent(prediction.num_tl_120dpd_2m)}`,
    `num_tl_30dpd=${encodeURIComponent(prediction.num_tl_30dpd)}`,
    `num_tl_90g_dpd_24m=${encodeURIComponent(prediction.num_tl_90g_dpd_24m)}`,
    `num_tl_op_past_12m=${encodeURIComponent(prediction.num_tl_op_past_12m)}`,
    `pct_tl_nvr_dlq=${encodeURIComponent(prediction.pct_tl_nvr_dlq)}`,
    `percent_bc_gt_75=${encodeURIComponent(prediction.percent_bc_gt_75)}`,
    `pub_rec_bankruptcies=${encodeURIComponent(
      prediction.pub_rec_bankruptcies
    )}`,
    `tax_liens=${encodeURIComponent(prediction.tax_liens)}`,
    `tot_hi_cred_lim=${encodeURIComponent(prediction.tot_hi_cred_lim)}`,
    `total_bal_ex_mort=${encodeURIComponent(prediction.total_bal_ex_mort)}`,
    `total_bc_limit=${encodeURIComponent(prediction.total_bc_limit)}`,
    `total_il_high_credit_limit=${encodeURIComponent(
      prediction.total_il_high_credit_limit
    )}`,
  ];

  const queryString = params.join("&");
  const url = `/api/predict?${queryString}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
