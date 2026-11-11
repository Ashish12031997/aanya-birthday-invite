// Paste into Google Sheets: Extensions > Apps Script.
// Saves every RSVP as a new row in a tab called "RSVPs".
const SHEET_NAME = "RSVPs";

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Sent at", "Name", "Attending", "Guests", "Notes"]);
  }
  const p = e.parameter;
  sheet.appendRow([p.sentAt, p.name, p.attending, p.guests, p.notes]);
  return ContentService.createTextOutput("ok");
}
