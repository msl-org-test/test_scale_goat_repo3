export function addLowerCaseEmailWhereIfNeeded({ email }, query: Knex.QueryBuilder) {
  if (email && query.whereRaw) {
    // case insensitive email query
    query.whereRaw(`LOWER("email") = LOWER('${email}')`);
  }
}
