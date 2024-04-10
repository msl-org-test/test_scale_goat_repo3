export function addLowerCaseEmailWhereIfNeeded({ email }, q: Knex.QueryBuilder) {
  if (email && q.whereRaw) {
    // case insensitive email query 
    q.whereRaw(`LOWER("email") = LOWER('${email}')`);
  }
}
