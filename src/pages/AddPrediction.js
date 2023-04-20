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
                    description="The listed amount of the loan applied for by the borrower. If at some point in time, the credit department reduces the loan amount, then it will be reflected in this value."
                    handleChange={handlePredictionInput}
                  />
                  {/* term */}
                  <FormRowSelect
                    name="term"
                    value={term}
                    description="The number of payments on the loan. Values are in months and can be either 36 or 60."
                    handleChange={handlePredictionInput}
                    list={term_options}
                  />
                  {/* emp_length */}
                  <FormRowSelect
                    name="emp_length"
                    value={emp_length}
                    description="Employment length in years. Possible values are between 0 and 10 where 0 means less than one year and 10 means ten or more years."
                    labelText="employment length"
                    handleChange={handlePredictionInput}
                    list={emp_length_options}
                  />
                  {/* home_ownership */}
                  <FormRowSelect
                    name="home_ownership"
                    value={home_ownership}
                    description="The home ownership status provided by the borrower during registration or obtained from the credit report."
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
                    description="The self-reported annual income provided by the borrower during registration."
                    handleChange={handlePredictionInput}
                  />
                  {/* purpose */}
                  <FormRowSelect
                    name="purpose"
                    value={purpose}
                    description="A category provided by the borrower for the loan request."
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
                    description="A ratio calculated using the borrower’s total monthly debt payments on the total debt obligations, excluding mortgage and the requested LC loan, divided by the borrower’s self-reported monthly income."
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_2yrs */}
                  <FormRow
                    type="number"
                    name="delinq_2yrs"
                    labelText="number of delinquencies in past 2 years"
                    value={delinq_2yrs}
                    description="The number of 30+ days past-due incidences of delinquency in the borrower's credit file for the past 2 years."
                    handleChange={handlePredictionInput}
                  />
                  {/* cr_hist_age_mths */}
                  <FormRow
                    type="number"
                    name="cr_hist_age_mths"
                    labelText="age of earliest credit line in months"
                    value={cr_hist_age_mths}
                    description="The age of the borrower's earliest reported credit line in months."
                    handleChange={handlePredictionInput}
                  />
                  {/* fico_range_low */}
                  <FormRow
                    type="number"
                    name="fico_range_low"
                    labelText="FICO range (from)"
                    value={fico_range_low}
                    description="The lower boundary range the borrower’s FICO at loan origination belongs to."
                    handleChange={handlePredictionInput}
                  />
                  {/* fico_range_high */}
                  <FormRow
                    type="number"
                    name="fico_range_high"
                    labelText="FICO range (to)"
                    value={fico_range_high}
                    description="The upper boundary range the borrower’s FICO at loan origination belongs to."
                    handleChange={handlePredictionInput}
                  />
                  {/* inq_last_6mths */}
                  <FormRow
                    type="number"
                    name="inq_last_6mths"
                    labelText="number of inquiries in past 6 months"
                    value={inq_last_6mths}
                    description="The number of inquiries in past 6 months (excluding auto and mortgage inquiries)."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_delinq"
                    labelText="months since last delinquency"
                    value={inv_mths_since_last_delinq}
                    description="The number of months since the borrower's last delinquency."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_record */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_record"
                    labelText="months since last public record"
                    value={inv_mths_since_last_record}
                    description="The number of months since the last public record."
                    handleChange={handlePredictionInput}
                  />
                  {/* open_acc */}
                  <FormRow
                    type="number"
                    name="open_acc"
                    labelText="number of open credit lines"
                    value={open_acc}
                    description="The number of open credit lines in the borrower's credit file."
                    handleChange={handlePredictionInput}
                  />
                  {/* pub_rec */}
                  <FormRow
                    type="number"
                    name="pub_rec"
                    labelText="number of derogatory public records"
                    value={pub_rec}
                    description="Number of derogatory public records."
                    handleChange={handlePredictionInput}
                  />
                  {/* revol_bal */}
                  <FormRow
                    type="number"
                    name="revol_bal"
                    labelText="total balance of revolving credit lines"
                    value={revol_bal}
                    description="Total credit revolving balance."
                    handleChange={handlePredictionInput}
                  />
                  {/* revol_util */}
                  <FormRow
                    type="number"
                    name="revol_util"
                    labelText="revolving line utilization rate"
                    value={revol_util}
                    description="Revolving line utilization rate, or the amount of credit the borrower is using relative to all available revolving credit."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_acc */}
                  <FormRow
                    type="number"
                    name="total_acc"
                    labelText="total number of credit lines in credit file"
                    value={total_acc}
                    description="The total number of credit lines currently in the borrower's credit file."
                    handleChange={handlePredictionInput}
                  />
                  {/* collections_12_mths_ex_med */}
                  <FormRow
                    type="number"
                    name="collections_12_mths_ex_med"
                    labelText="number of collections in past 12 months (excluding medical)"
                    value={collections_12_mths_ex_med}
                    description="Number of collections in 12 months excluding medical collections"
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_major_derog */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_major_derog"
                    labelText="months since last 90-day or worse rating"
                    value={inv_mths_since_last_major_derog}
                    description="Months since most recent 90-day or worse rating."
                    handleChange={handlePredictionInput}
                  />
                  {/* application_type */}
                  <FormRowSelect
                    name="application_type"
                    value={application_type}
                    description="Indicates whether the loan is an individual application or a joint application with two co-borrowers."
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
                    description="The combined self-reported annual income provided by the co-borrowers during registration."
                    handleChange={handlePredictionInput}
                  />
                  {/* dti_joint */}
                  <FormRow
                    type="text"
                    name="dti_joint"
                    labelText="combined debt-to-income ratio of co-borrowers"
                    value={dti_joint}
                    description="A ratio calculated using the co-borrowers' total monthly payments on the total debt obligations, excluding mortgages and the requested LC loan, divided by the co-borrowers' combined self-reported monthly income."
                    handleChange={handlePredictionInput}
                  />
                  {/* acc_now_delinq */}
                  <FormRow
                    type="number"
                    name="acc_now_delinq"
                    labelText="number of accounts now delinquent"
                    value={acc_now_delinq}
                    description="The number of accounts on which the borrower is now delinquent."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_coll_amt */}
                  <FormRow
                    type="number"
                    name="tot_coll_amt"
                    labelText="total collection amounts ever owed"
                    value={tot_coll_amt}
                    description="Total collection amounts ever owed."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_cur_bal */}
                  <FormRow
                    type="number"
                    name="tot_cur_bal"
                    labelText="total current balance of all accounts"
                    value={tot_cur_bal}
                    description="Total current balance of all accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_rev_hi_lim */}
                  <FormRow
                    type="number"
                    name="total_rev_hi_lim"
                    labelText="total revolving credit limit"
                    value={total_rev_hi_lim}
                    description="Total revolving high credit/credit limit."
                    handleChange={handlePredictionInput}
                  />
                  {/* acc_open_past_24mths */}
                  <FormRow
                    type="number"
                    name="acc_open_past_24mths"
                    labelText="number of trades opened in past 24 months"
                    value={acc_open_past_24mths}
                    description="Number of trades opened in past 24 months."
                    handleChange={handlePredictionInput}
                  />
                  {/* avg_cur_bal */}
                  <FormRow
                    type="number"
                    name="avg_cur_bal"
                    labelText="average current balance of all accounts"
                    value={avg_cur_bal}
                    description="Average current balance of all accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* bc_open_to_buy */}
                  <FormRow
                    type="number"
                    name="bc_open_to_buy"
                    labelText="total open to buy on bankcards"
                    value={bc_open_to_buy}
                    description="Total open to buy on revolving bankcards."
                    handleChange={handlePredictionInput}
                  />
                  {/* bc_util */}
                  <FormRow
                    type="number"
                    name="bc_util"
                    labelText="bankcard credit utilization rate"
                    value={bc_util}
                    description="Ratio of total current balance to high credit/credit limit for all bankcard accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* chargeoff_within_12_mths */}
                  <FormRow
                    type="number"
                    name="chargeoff_within_12_mths"
                    labelText="number of charge-offs in past 12 months"
                    value={chargeoff_within_12_mths}
                    description="Number of charge-offs within last 12 months at time of application for the secondary applicant."
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_amnt */}
                  <FormRow
                    type="number"
                    name="delinq_amnt"
                    labelText="past-due amount owed on which currently delinquent"
                    value={delinq_amnt}
                    description="The past-due amount owed for the accounts on which the borrower is now delinquent."
                    handleChange={handlePredictionInput}
                  />
                  {/* mo_sin_old_il_acct */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_il_acct"
                    labelText="months since oldest bank installment account opened"
                    value={mo_sin_old_il_acct}
                    description="Months since oldest bank installment account opened."
                    handleChange={handlePredictionInput}
                  />

                  {/* mo_sin_old_rev_tl_op */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_rev_tl_op"
                    labelText="months since oldest revolving account opened"
                    value={mo_sin_old_rev_tl_op}
                    description=""
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mo_sin_rcnt_rev_tl_op */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_rev_tl_op"
                    labelText="months since most recent revolving account opened"
                    value={inv_mo_sin_rcnt_rev_tl_op}
                    description="Months since oldest revolving account opened."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mo_sin_rcnt_tl */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_tl"
                    labelText="months since most recent account opened"
                    value={inv_mo_sin_rcnt_tl}
                    description="Months since most recent account opened."
                    handleChange={handlePredictionInput}
                  />
                  {/* mort_acc */}
                  <FormRow
                    type="number"
                    name="mort_acc"
                    labelText="number of mortgage accounts"
                    value={mort_acc}
                    description="Number of mortgage accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc"
                    labelText="months since most recent bankcard account opened"
                    value={inv_mths_since_recent_bc}
                    description=""
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc_dlq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc_dlq"
                    labelText="months since most recent bankcard delinquency"
                    value={inv_mths_since_recent_bc_dlq}
                    description="Months since most recent bankcard account opened."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_inq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_inq"
                    labelText="months since most recent inquiry"
                    value={inv_mths_since_recent_inq}
                    description="Months since most recent inquiry."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_revol_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_revol_delinq"
                    labelText="months since most recent revolving delinquency"
                    value={inv_mths_since_recent_revol_delinq}
                    description="Months since most recent revolving delinquency."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_accts_ever_120_pd */}
                  <FormRow
                    type="number"
                    name="num_accts_ever_120_pd"
                    labelText="number of accounts ever 120 or more days past due"
                    value={num_accts_ever_120_pd}
                    description="Number of accounts ever 120 or more days past due."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_bc_tl"
                    labelText="number of active bankcard accounts"
                    value={num_actv_bc_tl}
                    description="Number of currently active bankcard accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_rev_tl"
                    labelText="number of active revolving trades"
                    value={num_actv_rev_tl}
                    description="Number of currently active revolving trades."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_bc_sats */}
                  <FormRow
                    type="number"
                    name="num_bc_sats"
                    labelText="number of satisfactory bankcard accounts"
                    value={num_bc_sats}
                    description="Number of satisfactory bankcard accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_bc_tl"
                    labelText="total number of bankcard accounts"
                    value={num_bc_tl}
                    description="Number of bankcard accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_il_tl */}
                  <FormRow
                    type="number"
                    name="num_il_tl"
                    labelText="total number of installment accounts"
                    value={num_il_tl}
                    description="Number of installment accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_op_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_op_rev_tl"
                    labelText="number of open revolving accounts"
                    value={num_op_rev_tl}
                    description="Number of open revolving accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_accts */}
                  <FormRow
                    type="number"
                    name="num_rev_accts"
                    labelText="total number of revolving accounts"
                    value={num_rev_accts}
                    description="Number of revolving accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_tl_bal_gt_0 */}
                  <FormRow
                    type="number"
                    name="num_rev_tl_bal_gt_0"
                    labelText="number of revolving trades with balance greater than 0"
                    value={num_rev_tl_bal_gt_0}
                    description="Number of revolving trades with balance >0."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_sats */}
                  <FormRow
                    type="number"
                    name="num_sats"
                    labelText="number of satisfactory accounts"
                    value={num_sats}
                    description="Number of satisfactory accounts."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_120dpd_2m */}
                  <FormRow
                    type="number"
                    name="num_tl_120dpd_2m"
                    labelText="number of accounts currently 120 days past due"
                    value={num_tl_120dpd_2m}
                    description="Number of accounts currently 120 days past due (updated in past 2 months)."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_30dpd */}
                  <FormRow
                    type="number"
                    name="num_tl_30dpd"
                    labelText="number of accounts currently 30 days past due"
                    value={num_tl_30dpd}
                    description="Number of accounts currently 30 days past due (updated in past 2 months)."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_90g_dpd_24m */}
                  <FormRow
                    type="number"
                    name="num_tl_90g_dpd_24m"
                    labelText="number of accounts 90 or more days past due in past 24 months"
                    value={num_tl_90g_dpd_24m}
                    description="Number of accounts 90 or more days past due in last 24 months."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_op_past_12m */}
                  <FormRow
                    type="number"
                    name="num_tl_op_past_12m"
                    labelText="number of accounts opened in past 12 months"
                    value={num_tl_op_past_12m}
                    description="Number of accounts opened in past 12 months."
                    handleChange={handlePredictionInput}
                  />
                  {/* pct_tl_nvr_dlq */}
                  <FormRow
                    type="number"
                    name="pct_tl_nvr_dlq"
                    labelText="percent of trades never delinquent"
                    value={pct_tl_nvr_dlq}
                    description="Percent of trades never delinquent."
                    handleChange={handlePredictionInput}
                  />
                  {/* percent_bc_gt_75 */}
                  <FormRow
                    type="number"
                    name="percent_bc_gt_75"
                    labelText="percentage of all bankcard accounts greater than 75% of limit"
                    value={percent_bc_gt_75}
                    description="Percentage of all bankcard accounts > 75% of limit."
                    handleChange={handlePredictionInput}
                  />
                  {/* pub_rec_bankruptcies */}
                  <FormRow
                    type="number"
                    name="pub_rec_bankruptcies"
                    labelText="number of public record bankruptcies"
                    value={pub_rec_bankruptcies}
                    description="Number of public record bankruptcies."
                    handleChange={handlePredictionInput}
                  />
                  {/* tax_liens */}
                  <FormRow
                    type="number"
                    name="tax_liens"
                    labelText="number of tax liens"
                    value={tax_liens}
                    description="Number of tax liens."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_hi_cred_lim */}
                  <FormRow
                    type="number"
                    name="tot_hi_cred_lim"
                    labelText="total high credit/credit limit"
                    value={tot_hi_cred_lim}
                    description="Total high credit/credit limit."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bal_ex_mort */}
                  <FormRow
                    type="number"
                    name="total_bal_ex_mort"
                    labelText="total credit balance excluding mortgage"
                    value={total_bal_ex_mort}
                    description="Total credit balance excluding mortgage."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bc_limit */}
                  <FormRow
                    type="number"
                    name="total_bc_limit"
                    labelText="total bankcard credit limit"
                    value={total_bc_limit}
                    description="Total bankcard high credit/credit limit."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_il_high_credit_limit */}
                  <FormRow
                    type="number"
                    name="total_il_high_credit_limit"
                    labelText="total installment high credit/credit limit"
                    value={total_il_high_credit_limit}
                    description="Total installment high credit/credit limit."
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
