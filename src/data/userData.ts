import { User } from "../models/user";

export const users: User[] = [
  {
    id: "1b234d67-89ab-4cde-0123-456789abcdef",
    fullName: "Admin User",
    username: "Admin",
    email: "admin@email.com",
    image:
      "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "admin123",
    phoneNumber: "+1234567890",
    isActive: true,
  },
  {
    id: "a1b2c3d4-e5f6-7890-1234-56789abcdef1",
    fullName: "Mario",
    username: "mario",
    email: "mario@email.com",
    image:
      "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "mario1234",
    phoneNumber: "+1234567890",
    isActive: true,
  },
  {
    id: "b2c3d4e5-f6a7-8901-2345-6789abcdef2",
    fullName: "Bob Smith",
    username: "bobsmith",
    email: "bob.smith@example.com",
    image:
      "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "bobsecure",
    phoneNumber: "+1234567897",
    isActive: true,
  },
  {
    id: "c3d4e5f6-a7b8-9012-3456-789abcdef34",
    fullName: "Charlie Davis",
    username: "charlied",
    email: "charlie.davis@example.com",
    image:
      "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "charlie12345",
    phoneNumber: "+1234567898",
    isActive: false,
  },
  {
    id: "d4e5f6a7-b8c9-0123-4567-89abcdef567",
    fullName: "Diana Evans",
    username: "dianae",
    email: "diana.evans@example.com",
    image:
      "https://media.istockphoto.com/id/1278828005/pt/vetorial/round-button-icon-avatar-button-banner-round-badge-interface-for-application-illustration.jpg?s=1024x1024&w=is&k=20&c=DFHXgBL1qoFUJi22v-fXlax1Ixm7JP-W2qTubxHYCAg=",
    password: "diana!secure",
    phoneNumber: "+1234567899",
    isActive: true,
  },
];
