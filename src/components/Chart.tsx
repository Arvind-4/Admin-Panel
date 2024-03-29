import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B'],
  labels: ['XDM', 'AWE', 'OMN', 'ML'],
  legend: {
    show: true,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const Chart: React.FC = () => {
  const [state, setState] = useState<ChartState>({
    series: [65, 34, 12, 56],
  });
  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5'>
      <div className='mb-3 justify-between gap-4 sm:flex'>
        <div>
          <h5 className='text-xl font-semibold text-black dark:text-white'>
            Analytics
          </h5>
        </div>
        <div></div>
      </div>
      <div className='mb-2'>
        <div className='mx-auto flex justify-center'>
          <ReactApexChart
            options={options}
            series={state.series}
            type='donut'
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
