interface ISendMailService {
  sendEmail(email: string, name: string): void; 
}

export { ISendMailService };