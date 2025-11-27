// Booking related types
import { UseFormRegister, UseFormSetValue, FieldErrors } from "react-hook-form";

export interface BookingData {
  excursionId: string;
  adults: number;
  children: number;
  selectedDate: string;
  promoCode?: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface Booking {
  id: string;
  excursionId: string;
  userId: string;
  adults: number;
  children: number;
  selectedDate: string;
  promoCode?: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  updatedAt: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface BookingStatus {
  id: string;
  bookingId: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  message?: string;
  createdAt: string;
} 


export interface BookingFormData {
  adults: number;
  children: number;
  selectedDate: number;
  promoCode: string;
  cardholderName: string;
  cardType: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export type GuestsSectionProps = {
  register: UseFormRegister<BookingFormData>;
  setValue: UseFormSetValue<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  adults: number;
  children: number;
};

export type TripDatesSectionProps = {
  register: UseFormRegister<BookingFormData>;
  setValue: UseFormSetValue<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  selectedDate: number;
  visibleDates: { departure: string; arrival: string }[];
};

export type PaymentMethodSectionProps = {
  register: UseFormRegister<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
};

export type BookingFormRightCardsProps = {
  register: UseFormRegister<BookingFormData>;
  setValue: UseFormSetValue<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  promoCode: string;
  isValid: boolean;
  isSubmitting: boolean;
  submitError: string | null;
};

export type BookingFormLeftCardProps = {
  register: UseFormRegister<BookingFormData>;
  setValue: UseFormSetValue<BookingFormData>;
  errors: FieldErrors<BookingFormData>;
  adults: number;
  children: number;
  selectedDate: number;
  promoCode: string;
  visibleDates: { departure: string; arrival: string }[];
};