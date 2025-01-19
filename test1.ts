import {Knex} from "knex"
// hi!
export function addLowerCaseEmailWhereIfNeeded({ email }, q: Knex.QueryBuilder) {
  if (email && q.whereRaw) {
    // case insensitive email query w
    q.whereRaw(`LOWER("email") = LOWER('${email}')`);
  }
}
