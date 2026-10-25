export const donate = {
  qrImage: "", // e.g. "/upi-qr.png" once the NGO sends the QR image and it is in the public folder
  upiId: "[UPI ID]",
  bank: {
    accountName: "[Account name]",
    accountNumber: "[Account number]",
    bankName: "[Bank name and branch]",
    ifsc: "[IFSC code]",
  },
  taxNote: "[Tax benefit information, if applicable. To be confirmed with the NGO.]",
};

export const fundUses = [
  { title: "[Area of support 1]", text: "[One or two sentences from the NGO.]" },
  { title: "[Area of support 2]", text: "[One or two sentences from the NGO.]" },
  { title: "[Area of support 3]", text: "[One or two sentences from the NGO.]" },
];