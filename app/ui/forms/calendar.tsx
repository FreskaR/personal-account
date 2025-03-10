'use client'
import { useEffect, useRef } from 'react';
import { Options, Calendar } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';
import CalendarSvg from '../svg-icons/calendar';

export default function CalendarInput() {
  useEffect(() => {
    const options: Options = {
        locale: 'ru',
        selectedTheme: 'light',
        inputMode: true,
        positionToInput: 'auto',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedDates[0]) {
            self.context.inputElement.value = self.context.selectedDates[0];
            self.hide();
          } else {
            self.context.inputElement.value = '';
          }
        },
        styles: {
            calendar: 'w-[297px] h-[321px] bg-white rounded-[28px] shadow-none',
        },
        layouts: {
            default: `
              <div class="header" data-vc="header" role="toolbar" aria-label="navidation">
                <#ArrowPrev [month] />
                <div class="headerContent" data-vc-header="content">
                  <#Month />
                  <#Year />
                </div>
                <#ArrowNext [month] />
              </div>
              <div class="wrapper" data-vc="wrapper">
                <#WeekNumbers />
                <div class="content" data-vc="content">
                  <#Dates />
                  <#DateRangeTooltip />
                </div>
              </div>
              <#ControlTime />
            `
        },
    }

    const calendar = new Calendar('#calendar-input', options);
    calendar.init();
  }, []);

  return (
    <div className=' h-[27px]'>
        <input type="text" id="calendar-input" className='w-[150px] h-[27px] border-black border-[0.5px] text-[14px]/[18px] pl-[15px]'></input>
        <div className="relative top-[-26px] right-[-119px]"><CalendarSvg/></div>
    </div>
  );
};