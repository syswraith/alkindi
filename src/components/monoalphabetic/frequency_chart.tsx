import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Counter from '../../utilities/Counter';

type Props = {
  counter: Counter;
};

export default function FrequencyChart({ counter }: Props) {
  const data = counter.getChartData();

  return (
    <div className="p-3 border-2 rounded-xl w-full min-w-[300px] h-[300px] flex flex-col">
      
      <h4 className="text-2xl mb-2">Frequency Analysis</h4>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="letter" />
            <YAxis />
            <Bar dataKey="count" fill="#8884d8" isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}