import { RowID, RowElement } from './interface';

function insertRow(row: RowElement): number;

function deleteRow(rowId: RowID): void;

function updateRow(rowId: RowID, row: RowElement): number;
