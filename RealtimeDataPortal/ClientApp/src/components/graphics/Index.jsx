import { useState, useEffect, useMemo, useRef } from 'react';
import { LoadingOverlay } from '@mantine/core';

import TabsHeader from "./tabs/Tabs";
import ErrorsPage from '../errors-page/ErrorsPage';
import AppPreloader from '../loader/appPreloader';
import HeaderGraphics from './header/HeaderGraphics';
import TabContent from "./tabs/TabsContent";
import Graphic from "./graphic/Graphic";
import Settings from "./settings/Settings";
import Calendar from './calendar/Calendar';
import MonthCalendar from "./calendar/MonthCalendar";
import DayCalendar from "./calendar/DayCalendar";
import RangeCalendar from "./calendar/RangeCalendar";
import Chart from "./graphic/Chart";
import ApexChart from './graphic/ApexChart';
import TableForGraphic from "./table/TableForGraphic";

import { useFormateDate } from '../../hooks/useFormateDate';
import { useRequest } from '../../hooks/useRequest';

export {
    useState, useEffect, useMemo, useRef,
    TabsHeader, ErrorsPage, AppPreloader, HeaderGraphics, TabContent, Graphic, Settings, Calendar,
    MonthCalendar, DayCalendar, RangeCalendar, useFormateDate, useRequest, Chart, ApexChart, TableForGraphic,
    LoadingOverlay
};