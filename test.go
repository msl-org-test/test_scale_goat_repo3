package main

import "fmt"

func main() {
listQuery := fmt.Sprintf("SELECT name as '%s', name as '%s', name as '%s' FROM sys.databases", infra.ColumnId, infra.ColumnName, infra.ColumnTagDbName) // test
}
