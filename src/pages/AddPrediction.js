import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  FormRow,
  FormRowSelect,
  BigSidebar,
  Navbar,
  PredictionResultsContainer,
  CasesBar,
} from "../components";
import {
  handleChange,
  clearValues,
  createPrediction,
} from "../features/prediction/PredictionSlice";
import SharedWrapper from "../assets/wrappers/SharedLayout";

const AddPrediction = () => {
  const {
    isLoading,
    loan_amnt,
    term,
    term_options,
    emp_length,
    emp_length_options,
    home_ownership,
    home_ownership_options,
    annual_inc,
    purpose,
    purpose_options,
    dti,
    delinq_2yrs,
    cr_hist_age_mths,
    fico_range_low,
    fico_range_high,
    inq_last_6mths,
    inv_mths_since_last_delinq,
    inv_mths_since_last_record,
    open_acc,
    pub_rec,
    revol_bal,
    revol_util,
    total_acc,
    collections_12_mths_ex_med,
    inv_mths_since_last_major_derog,
    application_type,
    application_type_options,
    annual_inc_joint,
    dti_joint,
    acc_now_delinq,
    tot_coll_amt,
    tot_cur_bal,
    total_rev_hi_lim,
    acc_open_past_24mths,
    avg_cur_bal,
    bc_open_to_buy,
    bc_util,
    chargeoff_within_12_mths,
    delinq_amnt,
    mo_sin_old_il_acct,
    mo_sin_old_rev_tl_op,
    inv_mo_sin_rcnt_rev_tl_op,
    inv_mo_sin_rcnt_tl,
    mort_acc,
    inv_mths_since_recent_bc,
    inv_mths_since_recent_bc_dlq,
    inv_mths_since_recent_inq,
    inv_mths_since_recent_revol_delinq,
    num_accts_ever_120_pd,
    num_actv_bc_tl,
    num_actv_rev_tl,
    num_bc_sats,
    num_bc_tl,
    num_il_tl,
    num_op_rev_tl,
    num_rev_accts,
    num_rev_tl_bal_gt_0,
    num_sats,
    num_tl_120dpd_2m,
    num_tl_30dpd,
    num_tl_90g_dpd_24m,
    num_tl_op_past_12m,
    pct_tl_nvr_dlq,
    percent_bc_gt_75,
    pub_rec_bankruptcies,
    tax_liens,
    tot_hi_cred_lim,
    total_bal_ex_mort,
    total_bc_limit,
    total_il_high_credit_limit,
  } = useSelector((store) => store.prediction);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !loan_amnt ||
      !annual_inc ||
      !dti ||
      !delinq_2yrs ||
      !cr_hist_age_mths ||
      !fico_range_low ||
      !fico_range_high ||
      !inq_last_6mths ||
      !inv_mths_since_last_delinq ||
      !inv_mths_since_last_record ||
      !open_acc ||
      !pub_rec ||
      !revol_bal ||
      !revol_util ||
      !total_acc ||
      !collections_12_mths_ex_med ||
      !inv_mths_since_last_major_derog ||
      !annual_inc_joint ||
      !dti_joint ||
      !acc_now_delinq ||
      !tot_coll_amt ||
      !tot_cur_bal ||
      !total_rev_hi_lim ||
      !acc_open_past_24mths ||
      !avg_cur_bal ||
      !bc_open_to_buy ||
      !bc_util ||
      !chargeoff_within_12_mths ||
      !delinq_amnt ||
      !mo_sin_old_il_acct ||
      !mo_sin_old_rev_tl_op ||
      !inv_mo_sin_rcnt_rev_tl_op ||
      !inv_mo_sin_rcnt_tl ||
      !mort_acc ||
      !inv_mths_since_recent_bc ||
      !inv_mths_since_recent_bc_dlq ||
      !inv_mths_since_recent_inq ||
      !inv_mths_since_recent_revol_delinq ||
      !num_accts_ever_120_pd ||
      !num_actv_bc_tl ||
      !num_actv_rev_tl ||
      !num_bc_sats ||
      !num_bc_tl ||
      !num_il_tl ||
      !num_op_rev_tl ||
      !num_rev_accts ||
      !num_rev_tl_bal_gt_0 ||
      !num_sats ||
      !num_tl_120dpd_2m ||
      !num_tl_30dpd ||
      !num_tl_90g_dpd_24m ||
      !num_tl_op_past_12m ||
      !pct_tl_nvr_dlq ||
      !percent_bc_gt_75 ||
      !pub_rec_bankruptcies ||
      !tax_liens ||
      !tot_hi_cred_lim ||
      !total_bal_ex_mort ||
      !total_bc_limit ||
      !total_il_high_credit_limit
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(
      createPrediction({
        loan_amnt,
        term,
        emp_length,
        home_ownership,
        annual_inc,
        purpose,
        dti,
        delinq_2yrs,
        cr_hist_age_mths,
        fico_range_low,
        fico_range_high,
        inq_last_6mths,
        inv_mths_since_last_delinq,
        inv_mths_since_last_record,
        open_acc,
        pub_rec,
        revol_bal,
        revol_util,
        total_acc,
        collections_12_mths_ex_med,
        inv_mths_since_last_major_derog,
        application_type,
        annual_inc_joint,
        dti_joint,
        acc_now_delinq,
        tot_coll_amt,
        tot_cur_bal,
        total_rev_hi_lim,
        acc_open_past_24mths,
        avg_cur_bal,
        bc_open_to_buy,
        bc_util,
        chargeoff_within_12_mths,
        delinq_amnt,
        mo_sin_old_il_acct,
        mo_sin_old_rev_tl_op,
        inv_mo_sin_rcnt_rev_tl_op,
        inv_mo_sin_rcnt_tl,
        mort_acc,
        inv_mths_since_recent_bc,
        inv_mths_since_recent_bc_dlq,
        inv_mths_since_recent_inq,
        inv_mths_since_recent_revol_delinq,
        num_accts_ever_120_pd,
        num_actv_bc_tl,
        num_actv_rev_tl,
        num_bc_sats,
        num_bc_tl,
        num_il_tl,
        num_op_rev_tl,
        num_rev_accts,
        num_rev_tl_bal_gt_0,
        num_sats,
        num_tl_120dpd_2m,
        num_tl_30dpd,
        num_tl_90g_dpd_24m,
        num_tl_op_past_12m,
        pct_tl_nvr_dlq,
        percent_bc_gt_75,
        pub_rec_bankruptcies,
        tax_liens,
        tot_hi_cred_lim,
        total_bal_ex_mort,
        total_bc_limit,
        total_il_high_credit_limit,
      })
    );
  };

  const handlePredictionInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <SharedWrapper>
      <main className="dashboard">
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Wrapper>
              <form className="form">
                <h4>Switch cases</h4>
                <CasesBar />
                <br />
                <div className="form-center">
                  {/* loan_amnt */}
                  <FormRow
                    type="number"
                    name="loan_amnt"
                    labelText="loan amnt"
                    value={loan_amnt}
                    handleChange={handlePredictionInput}
                  />
                  {/* term */}
                  <FormRowSelect
                    name="term"
                    value={term}
                    handleChange={handlePredictionInput}
                    list={term_options}
                  />
                  {/* emp_length */}
                  <FormRowSelect
                    name="emp_length"
                    value={emp_length}
                    labelText="employment length"
                    handleChange={handlePredictionInput}
                    list={emp_length_options}
                  />
                  {/* home_ownership */}
                  <FormRowSelect
                    name="home_ownership"
                    value={home_ownership}
                    labelText="home onwership"
                    handleChange={handlePredictionInput}
                    list={home_ownership_options}
                  />
                  {/* annual_inc */}
                  <FormRow
                    type="number"
                    name="annual_inc"
                    labelText="annual income"
                    value={annual_inc}
                    handleChange={handlePredictionInput}
                  />
                  {/* purpose */}
                  <FormRowSelect
                    name="purpose"
                    value={purpose}
                    labelText="loan purpose"
                    handleChange={handlePredictionInput}
                    list={purpose_options}
                  />
                  {/* dti */}
                  <FormRow
                    type="number"
                    name="dti"
                    labelText="debt-to-income ratio"
                    value={dti}
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_2yrs */}
                  <FormRow
                    type="number"
                    name="delinq_2yrs"
                    labelText="number of delinquencies in past 2 years"
                    value={delinq_2yrs}
                    handleChange={handlePredictionInput}
                  />
                  {/* cr_hist_age_mths */}
                  <FormRow
                    type="number"
                    name="cr_hist_age_mths"
                    labelText="age of earliest credit line in months"
                    value={cr_hist_age_mths}
                    handleChange={handlePredictionInput}
                  />
                  {/* fico_range_low */}
                  <FormRow
                    type="number"
                    name="fico_range_low"
                    labelText="FICO range (from)"
                    value={fico_range_low}
                    handleChange={handlePredictionInput}
                  />
                  {/* fico_range_high */}
                  <FormRow
                    type="number"
                    name="fico_range_high"
                    labelText="FICO range (to)"
                    value={fico_range_high}
                    handleChange={handlePredictionInput}
                  />
                  {/* inq_last_6mths */}
                  <FormRow
                    type="number"
                    name="inq_last_6mths"
                    labelText="number of inquiries in past 6 months"
                    value={inq_last_6mths}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_delinq"
                    labelText="months since last delinquency"
                    value={inv_mths_since_last_delinq}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_record */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_record"
                    labelText="months since last public record"
                    value={inv_mths_since_last_record}
                    handleChange={handlePredictionInput}
                  />
                  {/* open_acc */}
                  <FormRow
                    type="number"
                    name="open_acc"
                    labelText="number of open credit lines"
                    value={open_acc}
                    handleChange={handlePredictionInput}
                  />
                  {/* pub_rec */}
                  <FormRow
                    type="number"
                    name="pub_rec"
                    labelText="number of derogatory public records"
                    value={pub_rec}
                    handleChange={handlePredictionInput}
                  />
                  {/* revol_bal */}
                  <FormRow
                    type="number"
                    name="revol_bal"
                    labelText="total balance of revolving credit lines"
                    value={revol_bal}
                    handleChange={handlePredictionInput}
                  />
                  {/* revol_util */}
                  <FormRow
                    type="number"
                    name="revol_util"
                    labelText="revolving line utilization rate"
                    value={revol_util}
                    handleChange={handlePredictionInput}
                  />
                  {/* total_acc */}
                  <FormRow
                    type="number"
                    name="total_acc"
                    labelText="total number of credit lines in credit file"
                    value={total_acc}
                    handleChange={handlePredictionInput}
                  />
                  {/* collections_12_mths_ex_med */}
                  <FormRow
                    type="number"
                    name="collections_12_mths_ex_med"
                    labelText="number of collections in past 12 months (excluding medical)"
                    value={collections_12_mths_ex_med}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_major_derog */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_major_derog"
                    labelText="months since last 90-day or worse rating"
                    value={inv_mths_since_last_major_derog}
                    handleChange={handlePredictionInput}
                  />
                  {/* application_type */}
                  <FormRowSelect
                    name="application_type"
                    value={application_type}
                    labelText="application type"
                    handleChange={handlePredictionInput}
                    list={application_type_options}
                  />
                  {/* annual_inc_joint */}
                  <FormRow
                    type="text"
                    name="annual_inc_joint"
                    labelText="combined annual income of co-borrowers"
                    value={annual_inc_joint}
                    handleChange={handlePredictionInput}
                  />
                  {/* dti_joint */}
                  <FormRow
                    type="text"
                    name="dti_joint"
                    labelText="combined debt-to-income ratio of co-borrowers"
                    value={dti_joint}
                    handleChange={handlePredictionInput}
                  />
                  {/* acc_now_delinq */}
                  <FormRow
                    type="number"
                    name="acc_now_delinq"
                    labelText="number of accounts now delinquent"
                    value={acc_now_delinq}
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_coll_amt */}
                  <FormRow
                    type="number"
                    name="tot_coll_amt"
                    labelText="total collection amounts ever owed"
                    value={tot_coll_amt}
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_cur_bal */}
                  <FormRow
                    type="number"
                    name="tot_cur_bal"
                    labelText="total current balance of all accounts"
                    value={tot_cur_bal}
                    handleChange={handlePredictionInput}
                  />
                  {/* total_rev_hi_lim */}
                  <FormRow
                    type="number"
                    name="total_rev_hi_lim"
                    labelText="total revolving credit limit"
                    value={total_rev_hi_lim}
                    handleChange={handlePredictionInput}
                  />
                  {/* acc_open_past_24mths */}
                  <FormRow
                    type="number"
                    name="acc_open_past_24mths"
                    labelText="number of trades opened in past 24 months"
                    value={acc_open_past_24mths}
                    handleChange={handlePredictionInput}
                  />
                  {/* avg_cur_bal */}
                  <FormRow
                    type="number"
                    name="avg_cur_bal"
                    labelText="average current balance of all accounts"
                    value={avg_cur_bal}
                    handleChange={handlePredictionInput}
                  />
                  {/* bc_open_to_buy */}
                  <FormRow
                    type="number"
                    name="bc_open_to_buy"
                    labelText="total open to buy on bankcards"
                    value={bc_open_to_buy}
                    handleChange={handlePredictionInput}
                  />
                  {/* bc_util */}
                  <FormRow
                    type="number"
                    name="bc_util"
                    labelText="bankcard credit utilization rate"
                    value={bc_util}
                    handleChange={handlePredictionInput}
                  />
                  {/* chargeoff_within_12_mths */}
                  <FormRow
                    type="number"
                    name="chargeoff_within_12_mths"
                    labelText="number of charge-offs in past 12 months"
                    value={chargeoff_within_12_mths}
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_amnt */}
                  <FormRow
                    type="number"
                    name="delinq_amnt"
                    labelText="past-due amount owed on which currently delinquent"
                    value={delinq_amnt}
                    handleChange={handlePredictionInput}
                  />
                  {/* mo_sin_old_il_acct */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_il_acct"
                    labelText="months since oldest bank installment account opened"
                    value={mo_sin_old_il_acct}
                    handleChange={handlePredictionInput}
                  />

                  {/* mo_sin_old_rev_tl_op */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_rev_tl_op"
                    labelText="months since oldest revolving account opened"
                    value={mo_sin_old_rev_tl_op}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mo_sin_rcnt_rev_tl_op */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_rev_tl_op"
                    labelText="months since most recent revolving account opened"
                    value={inv_mo_sin_rcnt_rev_tl_op}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mo_sin_rcnt_tl */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_tl"
                    labelText="months since most recent account opened"
                    value={inv_mo_sin_rcnt_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* mort_acc */}
                  <FormRow
                    type="number"
                    name="mort_acc"
                    labelText="number of mortgage accounts"
                    value={mort_acc}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc"
                    labelText="months since most recent bankcard account opened"
                    value={inv_mths_since_recent_bc}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc_dlq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc_dlq"
                    labelText="months since most recent bankcard delinquency"
                    value={inv_mths_since_recent_bc_dlq}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_inq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_inq"
                    labelText="months since most recent inquiry"
                    value={inv_mths_since_recent_inq}
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_revol_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_revol_delinq"
                    labelText="months since most recent revolving delinquency"
                    value={inv_mths_since_recent_revol_delinq}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_accts_ever_120_pd */}
                  <FormRow
                    type="number"
                    name="num_accts_ever_120_pd"
                    labelText="number of accounts ever 120 or more days past due"
                    value={num_accts_ever_120_pd}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_bc_tl"
                    labelText="number of active bankcard accounts"
                    value={num_actv_bc_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_rev_tl"
                    labelText="number of active revolving trades"
                    value={num_actv_rev_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_bc_sats */}
                  <FormRow
                    type="number"
                    name="num_bc_sats"
                    labelText="number of satisfactory bankcard accounts"
                    value={num_bc_sats}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_bc_tl"
                    labelText="total number of bankcard accounts"
                    value={num_bc_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_il_tl */}
                  <FormRow
                    type="number"
                    name="num_il_tl"
                    labelText="total number of installment accounts"
                    value={num_il_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_op_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_op_rev_tl"
                    labelText="number of open revolving accounts"
                    value={num_op_rev_tl}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_accts */}
                  <FormRow
                    type="number"
                    name="num_rev_accts"
                    labelText="total number of revolving accounts"
                    value={num_rev_accts}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_tl_bal_gt_0 */}
                  <FormRow
                    type="number"
                    name="num_rev_tl_bal_gt_0"
                    labelText="number of revolving trades with balance greater than 0"
                    value={num_rev_tl_bal_gt_0}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_sats */}
                  <FormRow
                    type="number"
                    name="num_sats"
                    labelText="number of satisfactory accounts"
                    value={num_sats}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_120dpd_2m */}
                  <FormRow
                    type="number"
                    name="num_tl_120dpd_2m"
                    labelText="number of accounts currently 120 days past due"
                    value={num_tl_120dpd_2m}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_30dpd */}
                  <FormRow
                    type="number"
                    name="num_tl_30dpd"
                    labelText="number of accounts currently 30 days past due"
                    value={num_tl_30dpd}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_90g_dpd_24m */}
                  <FormRow
                    type="number"
                    name="num_tl_90g_dpd_24m"
                    labelText="number of accounts 90 or more days past due in past 24 months"
                    value={num_tl_90g_dpd_24m}
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_op_past_12m */}
                  <FormRow
                    type="number"
                    name="num_tl_op_past_12m"
                    labelText="number of accounts opened in past 12 months"
                    value={num_tl_op_past_12m}
                    handleChange={handlePredictionInput}
                  />
                  {/* pct_tl_nvr_dlq */}
                  <FormRow
                    type="number"
                    name="pct_tl_nvr_dlq"
                    labelText="percent of trades never delinquent"
                    value={pct_tl_nvr_dlq}
                    handleChange={handlePredictionInput}
                  />
                  {/* percent_bc_gt_75 */}
                  <FormRow
                    type="number"
                    name="percent_bc_gt_75"
                    labelText="percentage of all bankcard accounts greater than 75% of limit"
                    value={percent_bc_gt_75}
                    handleChange={handlePredictionInput}
                  />
                  {/* pub_rec_bankruptcies */}
                  <FormRow
                    type="number"
                    name="pub_rec_bankruptcies"
                    labelText="number of public record bankruptcies"
                    value={pub_rec_bankruptcies}
                    handleChange={handlePredictionInput}
                  />
                  {/* tax_liens */}
                  <FormRow
                    type="number"
                    name="tax_liens"
                    labelText="number of tax liens"
                    value={tax_liens}
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_hi_cred_lim */}
                  <FormRow
                    type="number"
                    name="tot_hi_cred_lim"
                    labelText="total high credit/credit limit"
                    value={tot_hi_cred_lim}
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bal_ex_mort */}
                  <FormRow
                    type="number"
                    name="total_bal_ex_mort"
                    labelText="total credit balance excluding mortgage"
                    value={total_bal_ex_mort}
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bc_limit */}
                  <FormRow
                    type="number"
                    name="total_bc_limit"
                    labelText="total bankcard credit limit"
                    value={total_bc_limit}
                    handleChange={handlePredictionInput}
                  />
                  {/* total_il_high_credit_limit */}
                  <FormRow
                    type="number"
                    name="total_il_high_credit_limit"
                    labelText="total installment high credit/credit limit"
                    value={total_il_high_credit_limit}
                    handleChange={handlePredictionInput}
                  />

                  <div className="btn-container">
                    <button
                      type="button"
                      className="btn btn-block clear-btn"
                      onClick={() => dispatch(clearValues())}
                    >
                      clear
                    </button>
                    <button
                      type="submit"
                      className="btn btn-block submit-btn"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      predict
                    </button>
                  </div>
                  <PredictionResultsContainer />
                </div>
              </form>
            </Wrapper>
          </div>
        </div>
      </main>
    </SharedWrapper>
  );
};

export default AddPrediction;
