import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Counter from '../../utilities/Counter';

type Props = {
  counter: Counter;
};

export default function FrequencyChart({ counter }: Props) {
  const data = counter.getChartData();

  return (
    <div className="w-full min-w-[300px] h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="letter" />
          <YAxis />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}