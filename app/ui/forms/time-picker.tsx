'use client'
import { useEffect, useRef } from 'react';
import { Options, Calendar } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';

export default function TimePicker() {
  useEffect(() => {
    const options: Options = {
        locale: 'ru',
        selectedTheme: 'light',
        selectionDatesMode: false,
        selectionMonthsMode: false,
        selectionYearsMode: false,
        selectionTimeMode: 24,
        inputMode: true,
        positionToInput: 'left',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedTime) {
            self.context.inputElement.value = self.context.selectedTime;
          } else {
            self.context.inputElement.value = '';
          }
        },
        styles: {
            calendar: 'bg-white rounded-[28px] shadow-none',
        },
        layouts: {
            default: `
              <#ControlTime />
            `
        },
    }

    const calendar = new Calendar('#calendar-input', options);
    calendar.init();
  }, []);

  return (
        <input type="time" id="calendar-input" className='w-[95px] h-[27px] border-black border-[0.5px] text-center text-[14px]/[18px]'></input>
  );
};