import v2x_sdk as sdk
sdk.get_auth_code(sdk.PUBLIC, sdk.LOGIN_99P)
ctx = sdk.get_context(sdk.PUBLIC, sdk.LOGIN_99P)
# Enter Auth Code, then Request a table to be returned to you
ctx.set_query_type(sdk.SUMMARY)
summary_table, err = sdk.get_dataframe(ctx)
print(summary_table)
