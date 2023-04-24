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
                <h3>Switch cases</h3>
                <CasesBar />
                <br />
                <h5 className="section-style">Loan Details</h5>
                <div className="form-center">
                  {/* loan_amnt */}
                  <FormRow
                    type="number"
                    name="loan_amnt"
                    labelText="loan amnt"
                    value={loan_amnt}
                    description="The initial amount of money a borrower applies for, which may be subject to change if the credit department approves a lower amount. It does not reflect the final approved loan amount."
                    handleChange={handlePredictionInput}
                  />
                  {/* term */}
                  <FormRowSelect
                    name="term"
                    value={term}
                    description="The length of time (in months) over which the borrower is expected to repay the loan. The values in this field can be either 36 or 60, representing the number of payments that the borrower will make to repay the loan over the chosen term."
                    handleChange={handlePredictionInput}
                    list={term_options}
                  />
                  {/* purpose */}
                  <FormRowSelect
                    name="purpose"
                    value={purpose}
                    description="The reason or category provided by the borrower for the loan request. For example, loans for debt consolidation may have a different risk profile than loans for small business purposes, and understanding these differences can help lenders make more informed decisions about underwriting and risk management."
                    labelText="loan purpose"
                    handleChange={handlePredictionInput}
                    list={purpose_options}
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
                </div>
                <br />
                <h5 className="section-style">Borrower Information</h5>
                <div className="form-center">
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
                    description="The home ownership status of the borrower provided during the loan application process or obtained from the credit report. This field indicates whether the borrower owns a home or is renting, and can provide additional information about the borrower's financial stability and creditworthiness."
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
                  {/* dti */}
                  <FormRow
                    type="number"
                    name="dti"
                    labelText="debt-to-income ratio"
                    disabled={true} // input is disabled
                    value={dti}
                    description="The borrower's debt-to-income ratio, which is calculated as the borrower's total monthly debt payments divided by their self-reported monthly income. This ratio is calculated using the borrower's total debt obligations, excluding their mortgage and the requested LendingClub loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* annual_inc_joint */}
                  <FormRow
                    type="text"
                    name="annual_inc_joint"
                    labelText="combined annual income of co-borrowers"
                    value={annual_inc_joint}
                    description="The combined self-reported annual income provided by the co-borrowers during registration. This field is only applicable for joint loan applications and is not present in individual loan applications."
                    handleChange={handlePredictionInput}
                  />
                  {/* dti_joint */}
                  <FormRow
                    type="text"
                    name="dti_joint"
                    labelText="combined debt-to-income ratio of co-borrowers"
                    value={dti_joint}
                    disabled={true} // input is disabled
                    description="A ratio calculated using the co-borrowers' total monthly payments on the total debt obligations, excluding mortgages and the requested LC loan, divided by the co-borrowers' combined self-reported monthly income. This field is only applicable for joint loan applications and is not present in individual loan applications."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">Credit History and Limit</h5>
                <div className="form-center">
                  {/* fico_range_low */}
                  <FormRow
                    type="number"
                    name="fico_range_low"
                    labelText="FICO range (from)"
                    value={fico_range_low}
                    description="The lower end of the range of FICO credit scores assigned to the borrower at the time of the loan application. The FICO credit score is a widely used credit scoring model that ranges from 300 to 850, with higher scores indicating a lower credit risk."
                    handleChange={handlePredictionInput}
                  />
                  {/* fico_range_high */}
                  <FormRow
                    type="number"
                    name="fico_range_high"
                    labelText="FICO range (to)"
                    value={fico_range_high}
                    description="The higher end of the range of FICO credit scores assigned to the borrower at the time of the loan application. The FICO credit score is a widely used credit scoring model that ranges from 300 to 850, with higher scores indicating a lower credit risk."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_acc */}
                  <FormRow
                    type="number"
                    name="total_acc"
                    labelText="total number of credit lines in credit file"
                    value={total_acc}
                    description="The total number of credit lines in the borrower's credit file, including both open and closed accounts. A higher total_acc may indicate a longer credit history and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* open_acc */}
                  <FormRow
                    type="number"
                    name="open_acc"
                    labelText="number of open credit lines"
                    value={open_acc}
                    description="The number of open credit lines in the borrower's credit file. A higher number of open credit lines may indicate a higher level of credit utilisation and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* cr_hist_age_mths */}
                  <FormRow
                    type="number"
                    name="cr_hist_age_mths"
                    labelText="age of earliest credit line in months"
                    value={cr_hist_age_mths}
                    description="The age of the borrower's earliest reported credit line in months. This field provides information on the length of the borrower's credit history. A longer credit history may indicate a higher level of financial responsibility and stability, while a shorter credit history may indicate a higher credit risk for the borrower."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_hi_cred_lim */}
                  <FormRow
                    type="number"
                    name="tot_hi_cred_lim"
                    labelText="total high credit/credit limit"
                    value={tot_hi_cred_lim}
                    description="The total high credit/credit limit on all credit accounts listed on the borrower's credit file. A higher total high credit/credit limit may indicate a higher capacity to manage debt and a lower credit risk for the borrower."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_il_high_credit_limit */}
                  <FormRow
                    type="number"
                    name="total_il_high_credit_limit"
                    labelText="total installment high credit/credit limit"
                    value={total_il_high_credit_limit}
                    description="The total installment high credit/credit limit on all installment accounts listed on the borrower's credit file. A higher total installment high credit/credit limit may indicate a higher capacity to manage debt and a lower credit risk for the borrower."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bc_limit */}
                  <FormRow
                    type="number"
                    name="total_bc_limit"
                    labelText="total bankcard credit limit"
                    value={total_bc_limit}
                    description="The total bankcard high credit/credit limit on all bankcard accounts listed on the borrower's credit file. A higher total bankcard high credit/credit limit may indicate a higher capacity to manage debt and a lower credit risk for the borrower."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_rev_hi_lim */}
                  <FormRow
                    type="number"
                    name="total_rev_hi_lim"
                    labelText="total revolving credit limit"
                    value={total_rev_hi_lim}
                    description="The borrower's total revolving high credit or credit limit, which is the maximum amount of credit that the borrower can use on revolving accounts, such as credit cards and lines of credit. A higher total_rev_hi_lim may indicate a higher level of available credit and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">Loan and Account History</h5>
                <div className="form-center">
                  {/* num_sats */}
                  <FormRow
                    type="number"
                    name="num_sats"
                    labelText="number of satisfactory accounts"
                    value={num_sats}
                    description="The number of satisfactory accounts on the borrower's credit file. A satisfactory account is a credit account where the borrower is current on payments and has not defaulted. A higher number of satisfactory accounts may indicate a lower credit risk for the borrower, as it suggests a history of managing debt responsibly."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_op_past_12m */}
                  <FormRow
                    type="number"
                    name="num_tl_op_past_12m"
                    labelText="number of accounts opened in past 12 months"
                    value={num_tl_op_past_12m}
                    description="The number of accounts opened in the past 12 months on the borrower's credit file. A higher number of accounts opened in the past 12 months may indicate a higher credit risk for the borrower, as it suggests an increased level of recent credit utilisation and potentially more financial obligations to manage."
                    handleChange={handlePredictionInput}
                  />
                  {/* acc_open_past_24mths */}
                  <FormRow
                    type="number"
                    name="acc_open_past_24mths"
                    labelText="number of trades opened in past 24 months"
                    value={acc_open_past_24mths}
                    description="The number of trades, such as credit accounts, loans, and mortgages, that the borrower has opened in the past 24 months. A higher number of trades opened in the past 24 months may indicate a higher level of credit utilisation and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* mort_acc */}
                  <FormRow
                    type="number"
                    name="mort_acc"
                    labelText="number of mortgage accounts"
                    value={mort_acc}
                    description="The number of mortgage accounts on the borrower's credit file. A higher number of mortgage accounts may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mo_sin_rcnt_tl */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_tl"
                    labelText="months since most recent account opened"
                    value={inv_mo_sin_rcnt_tl}
                    description="The number of months since the most recent account was opened. A shorter time since the most recent account was opened may indicate higher credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_il_tl */}
                  <FormRow
                    type="number"
                    name="num_il_tl"
                    labelText="total number of installment accounts"
                    value={num_il_tl}
                    description="The number of installment accounts on the borrower's credit file. Installment accounts are credit accounts that require a fixed payment amount, such as a car loan or mortgage. A higher number of installment accounts may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* mo_sin_old_il_acct */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_il_acct"
                    labelText="months since oldest installment account opened"
                    value={mo_sin_old_il_acct}
                    description="The number of months since the borrower's oldest bank installment account was opened. A longer time since the oldest bank installment account was opened may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_cur_bal */}
                  <FormRow
                    type="number"
                    name="tot_cur_bal"
                    labelText="total current balance of all accounts"
                    value={tot_cur_bal}
                    description="The borrower's total current balance of all accounts, including both open and closed accounts. This field provides information on the borrower's overall level of debt . A higher value may indicate a higher level of indebtedness, which may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* avg_cur_bal */}
                  <FormRow
                    type="number"
                    name="avg_cur_bal"
                    labelText="average current balance of all accounts"
                    value={avg_cur_bal}
                    description="The borrower's average current balance of all accounts, including both open and closed accounts. A higher value may indicate a lower level of credit utilisation and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* total_bal_ex_mort */}
                  <FormRow
                    type="number"
                    name="total_bal_ex_mort"
                    labelText="total credit balance excluding mortgage"
                    value={total_bal_ex_mort}
                    description="The total credit balance excluding mortgage on all credit accounts listed on the borrower's credit file. A higher total credit balance excluding mortgage may indicate a higher level of outstanding debt and potentially more financial obligations to manage, which could increase the borrower's credit risk."
                    handleChange={handlePredictionInput}
                  />

                  {/* acc_now_delinq */}
                  <FormRow
                    type="number"
                    name="acc_now_delinq"
                    labelText="number of accounts now delinquent"
                    value={acc_now_delinq}
                    description="The number of accounts on which the borrower is currently delinquent. A higher number of delinquent accounts may indicate a higher credit risk for the borrower, as it suggests current difficulties in managing debt and repaying loans."
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_2yrs */}
                  <FormRow
                    type="number"
                    name="delinq_2yrs"
                    labelText="number of delinquencies in past 2 years"
                    value={delinq_2yrs}
                    description="The number of past-due incidences of delinquency in the borrower's credit file for the past two years, specifically for accounts that are 30 days or more past due. A higher number of delinquencies in the past two years may indicate a higher credit risk for the borrower."
                    handleChange={handlePredictionInput}
                  />
                  {/* pct_tl_nvr_dlq */}
                  <FormRow
                    type="number"
                    name="pct_tl_nvr_dlq"
                    labelText="percent of trades never delinquent"
                    value={pct_tl_nvr_dlq}
                    description="The percentage of trades on the borrower's credit file that have never been delinquent, meaning payments were always made on time. A higher percentage of trades that have never been delinquent may indicate a lower credit risk for the borrower, as it suggests a history of responsible credit management."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_delinq"
                    labelText="months since last delinquency"
                    value={inv_mths_since_last_delinq}
                    description="The number of months since the borrower's last reported delinquency on an account. A longer time since the last reported delinquency may indicate a lower credit risk for the borrower, while a shorter time since the last reported delinquency may indicate a higher credit risk. It's worth noting that this field is only populated for borrowers who have had at least one delinquency on their credit file."
                    handleChange={handlePredictionInput}
                  />
                  {/* delinq_amnt */}
                  <FormRow
                    type="number"
                    name="delinq_amnt"
                    labelText="past-due amount owed on which currently delinquent"
                    value={delinq_amnt}
                    description="The total past-due amount owed by the borrower on the accounts on which they are currently delinquent. A higher value may indicate a higher credit risk for the borrower, as it suggests current difficulties in managing debt and repaying loans."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_30dpd */}
                  <FormRow
                    type="number"
                    name="num_tl_30dpd"
                    labelText="number of accounts currently 30 days past due"
                    value={num_tl_30dpd}
                    description="The number of accounts that are currently 30 days past due and have been updated in the past 2 months on the borrower's credit file. A higher number of accounts that are 30 days past due may indicate a higher credit risk for the borrower, as it suggests a recent history of difficulty in repaying debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_tl_120dpd_2m */}
                  <FormRow
                    type="number"
                    name="num_tl_120dpd_2m"
                    labelText="number of accounts currently 120 days past due"
                    value={num_tl_120dpd_2m}
                    description="The number of accounts that are currently 120 days or more past due and have been updated in the past 2 months on the borrower's credit file. A higher number of accounts that are 120 days or more past due may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in repaying debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_accts_ever_120_pd */}
                  <FormRow
                    type="number"
                    name="num_accts_ever_120_pd"
                    labelText="number of accounts over 120 or more days past due"
                    value={num_accts_ever_120_pd}
                    description="The number of accounts on the borrower's credit file that have ever been 120 or more days past due. A higher number of accounts ever 120 or more days past due may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in repaying debt."
                    handleChange={handlePredictionInput}
                  />

                  {/* num_tl_90g_dpd_24m */}
                  <FormRow
                    type="number"
                    name="num_tl_90g_dpd_24m"
                    labelText="number of accounts 90 or more days past due in past 24 months"
                    value={num_tl_90g_dpd_24m}
                    description="The number of accounts that are 90 or more days past due in the last 24 months on the borrower's credit file. A higher number of accounts that are 90 or more days past due in the last 24 months may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in repaying debt."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">Bankcard Accounts</h5>
                <div className="form-center">
                  {/* num_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_bc_tl"
                    labelText="total number of bankcard accounts"
                    value={num_bc_tl}
                    description="The total number of bankcard accounts on the borrower's credit file. A higher number of bankcard accounts may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_bc_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_bc_tl"
                    labelText="number of active bankcard accounts"
                    value={num_actv_bc_tl}
                    description="The number of currently active bankcard accounts on the borrower's credit file. A higher number of active bankcard accounts may indicate a higher level of credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_bc_sats */}
                  <FormRow
                    type="number"
                    name="num_bc_sats"
                    labelText="number of satisfactory bankcard accounts"
                    value={num_bc_sats}
                    description="The number of satisfactory bankcard accounts on the borrower's credit file. A higher number of satisfactory bankcard accounts may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />

                  {/* bc_open_to_buy */}
                  <FormRow
                    type="number"
                    name="bc_open_to_buy"
                    labelText="total open to buy on bankcards"
                    value={bc_open_to_buy}
                    description="The borrower's total open-to-buy on bankcards, which is the amount of credit available to the borrower on revolving bankcard accounts. A higher value may indicate a higher level of available credit and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* bc_util */}
                  <FormRow
                    type="number"
                    name="bc_util"
                    labelText="bankcard credit utilization rate"
                    value={bc_util}
                    description="The borrower's ratio of total current balance to high credit or credit limit for all bankcard accounts, which is a measure of the borrower's credit utilisation on revolving bankcard accounts. A higher bc_util ratio may indicate a higher level of credit utilisation and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc"
                    labelText="months since most recent bankcard account opened"
                    value={inv_mths_since_recent_bc}
                    description="The number of months since the borrower's most recent bankcard account was opened. A shorter time since the most recent bankcard account was opened may indicate higher credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* percent_bc_gt_75 */}
                  <FormRow
                    type="number"
                    name="percent_bc_gt_75"
                    labelText="percentage of all bankcard accounts greater than 75% of limit"
                    value={percent_bc_gt_75}
                    description="The percentage of all bankcard accounts on the borrower's credit file that have a balance greater than 75% of their credit limit. A higher percentage of bankcard accounts with a balance greater than 75% of their credit limit may indicate a higher credit risk for the borrower, as it suggests a higher level of credit utilisation and potentially more financial obligations to manage."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_bc_dlq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_bc_dlq"
                    labelText="months since most recent bankcard delinquency"
                    value={inv_mths_since_recent_bc_dlq}
                    description="The number of months since the most recent delinquency on a bankcard account. A longer time since the most recent bankcard delinquency may indicate a lower credit risk for the borrower, as it suggests a more recent history of managing debt responsibly."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">Revolving Accounts</h5>
                <div className="form-center">
                  {/* inv_mo_sin_rcnt_rev_tl_op */}
                  <FormRow
                    type="text"
                    name="inv_mo_sin_rcnt_rev_tl_op"
                    labelText="months since most recent revolving account opened"
                    value={inv_mo_sin_rcnt_rev_tl_op}
                    description="The number of months since the most recent revolving account was opened. A shorter time since the most recent revolving account was opened may indicate higher credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_accts */}
                  <FormRow
                    type="number"
                    name="num_rev_accts"
                    labelText="total number of revolving accounts"
                    value={num_rev_accts}
                    description="The total number of revolving accounts on the borrower's credit file. Revolving accounts are credit accounts with a predetermined credit limit that the borrower can draw from as needed, such as a credit card or line of credit. A higher number of revolving accounts may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* mo_sin_old_rev_tl_op */}
                  <FormRow
                    type="number"
                    name="mo_sin_old_rev_tl_op"
                    labelText="months since oldest revolving account opened"
                    value={mo_sin_old_rev_tl_op}
                    description="The number of months since the borrower's oldest revolving account was opened. A longer time since the oldest revolving account was opened may indicate a longer credit history and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_actv_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_actv_rev_tl"
                    labelText="number of active revolving trades"
                    value={num_actv_rev_tl}
                    description="The number of currently active revolving trades (such as credit cards or lines of credit) on the borrower's credit file. A higher number of active revolving trades may indicate a higher level of credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_op_rev_tl */}
                  <FormRow
                    type="number"
                    name="num_op_rev_tl"
                    labelText="number of open revolving accounts"
                    value={num_op_rev_tl}
                    description="The number of open revolving accounts on the borrower's credit file. Revolving accounts are credit accounts with a predetermined credit limit that the borrower can draw from as needed, such as a credit card or line of credit. A higher number of open revolving accounts may indicate a higher level of credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* num_rev_tl_bal_gt_0 */}
                  <FormRow
                    type="number"
                    name="num_rev_tl_bal_gt_0"
                    labelText="number of revolving trades with balance greater than 0"
                    value={num_rev_tl_bal_gt_0}
                    description="The number of revolving trades with a balance greater than zero on the borrower's credit file. Revolving trades are credit accounts with a predetermined credit limit that the borrower can draw from as needed, such as a credit card or line of credit. A higher number of revolving trades with a balance greater than zero may indicate a higher level of credit utilisation and may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />

                  {/* revol_bal */}
                  <FormRow
                    type="number"
                    name="revol_bal"
                    labelText="total balance of revolving credit lines"
                    value={revol_bal}
                    description="The borrower's total credit revolving balance, which is the amount of debt owed on all revolving credit accounts, such as credit cards and lines of credit. A higher value may indicate a higher level of debt and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />
                  {/* revol_util */}
                  <FormRow
                    type="number"
                    name="revol_util"
                    labelText="revolving line utilization rate"
                    value={revol_util}
                    description="The borrower's revolving line utilisation rate, which is the amount of credit the borrower is using relative to all available revolving credit. A higher value may indicate a higher level of credit utilisation and may be a factor in determining the borrower's ability to manage debt and repay the loan."
                    handleChange={handlePredictionInput}
                  />

                  {/* inv_mths_since_recent_revol_delinq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_revol_delinq"
                    labelText="months since most recent revolving delinquency"
                    value={inv_mths_since_recent_revol_delinq}
                    description="The number of months since the most recent delinquency on a revolving credit account, such as a credit card or line of credit. A longer time since the most recent revolving delinquency may indicate a lower credit risk for the borrower, as it suggests a more recent history of managing debt responsibly."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">
                  Public Record and Derogatory Metrics
                </h5>
                <div className="form-center">
                  {/* pub_rec */}
                  <FormRow
                    type="number"
                    name="pub_rec"
                    labelText="number of derogatory public records"
                    value={pub_rec}
                    description="The number of derogatory public records, such as bankruptcies or tax liens, on the borrower's credit file. A higher number of derogatory public records may indicate a higher credit risk for the borrower, as it suggests a history of financial difficulties and potential challenges in repaying debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* pub_rec_bankruptcies */}
                  <FormRow
                    type="number"
                    name="pub_rec_bankruptcies"
                    labelText="number of public record bankruptcies"
                    value={pub_rec_bankruptcies}
                    description="The number of public record bankruptcies on the borrower's credit file. A higher number of public record bankruptcies may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in managing debt and a higher likelihood of default."
                    handleChange={handlePredictionInput}
                  />
                  {/* tax_liens */}
                  <FormRow
                    type="number"
                    name="tax_liens"
                    labelText="number of tax liens"
                    value={tax_liens}
                    description="The number of tax liens on the borrower's credit file. A tax lien is a legal claim against a borrower's assets for unpaid taxes. A higher number of tax liens may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in managing debt and a higher likelihood of default."
                    handleChange={handlePredictionInput}
                  />
                  {/* collections_12_mths_ex_med */}
                  <FormRow
                    type="number"
                    name="collections_12_mths_ex_med"
                    labelText="number of collections in past 12 months (excluding medical)"
                    value={collections_12_mths_ex_med}
                    description="The number of non-medical collections on the borrower's credit file in the past 12 months. A higher number of collections in the past 12 months may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in repaying debt. It's worth noting that this field only includes non-medical collections and excludes medical collections."
                    handleChange={handlePredictionInput}
                  />
                  {/* chargeoff_within_12_mths */}
                  <FormRow
                    type="number"
                    name="chargeoff_within_12_mths"
                    labelText="number of charge-offs in past 12 months"
                    value={chargeoff_within_12_mths}
                    description="The number of charge-offs on the applicant's credit file within the last 12 months at the time of application. A charge-off is a debt that has been written off as uncollectible by the lender, typically after the borrower has been delinquent for an extended period of time. A higher number of charge-offs within the last 12 months may indicate a higher credit risk for the borrower, as it suggests a history of difficulty in repaying debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* tot_coll_amt */}
                  <FormRow
                    type="number"
                    name="tot_coll_amt"
                    labelText="total collection amounts ever owed"
                    value={tot_coll_amt}
                    description="The total amount of collections ever owed by the borrower, including both paid and unpaid collections. A higher value may indicate a history of difficulty in repaying debt, which may be a factor in determining the borrower's creditworthiness and ability to manage debt."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_major_derog */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_major_derog"
                    labelText="months since last 90-day or worse rating"
                    value={inv_mths_since_last_major_derog}
                    description="The number of months since the borrower's most recent 90-day or worse rating, such as a delinquency or charge-off, was recorded on their credit file. A longer time since the last major derogatory event may indicate a lower credit risk for the borrower, while a shorter time since the last major derogatory event may indicate a higher credit risk."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_last_record */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_last_record"
                    labelText="months since last public record"
                    value={inv_mths_since_last_record}
                    description="The number of months since the last public record, such as a bankruptcy or a civil judgment, was recorded for the borrower. A longer time since the last public record may indicate a lower credit risk for the borrower, while a shorter time since the last public record may indicate a higher credit risk. It's worth noting that not all borrowers will have a record on file, so this field may not be applicable for all loans in the dataset."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <h5 className="section-style">Inquiry History</h5>
                <div className="form-center">
                  {/* inq_last_6mths */}
                  <FormRow
                    type="number"
                    name="inq_last_6mths"
                    labelText="number of inquiries in past 6 months"
                    value={inq_last_6mths}
                    description="The number of credit inquiries made on the borrower's credit file in the past 6 months, excluding inquiries related to auto loans and mortgages. This field provides information on recent credit activity by the borrower. A high number of inquiries in the past 6 months may indicate that the borrower is actively seeking credit and may be at a higher risk of default."
                    handleChange={handlePredictionInput}
                  />
                  {/* inv_mths_since_recent_inq */}
                  <FormRow
                    type="text"
                    name="inv_mths_since_recent_inq"
                    labelText="months since most recent inquiry"
                    value={inv_mths_since_recent_inq}
                    description="The number of months since the borrower's most recent credit inquiry. A longer time since the most recent credit inquiry may indicate a lower credit risk for the borrower, as it suggests a lower level of recent credit activity and potential credit risk."
                    handleChange={handlePredictionInput}
                  />
                </div>
                <br />
                <div className="form-center">
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
                </div>
                <PredictionResultsContainer />
              </form>
            </Wrapper>
          </div>
        </div>
      </main>
    </SharedWrapper>
  );
};

export default AddPrediction;
