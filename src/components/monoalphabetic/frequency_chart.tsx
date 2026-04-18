import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

type ChartData = {
  letter: string;
  count: number;
};

type Props = {
  title: string;
  data: ChartData[];
  color?: string;
};

export default function FrequencyChart({
  title,
  data,
  color = "#8884d8"
}: Props) {

  return (
    <div className="p-3 border-2 rounded-xl w-full h-[300px] flex flex-col">
      
      <h4 className="text-2xl mb-2">{title}</h4>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="letter" />
            <YAxis />
            <Bar dataKey="count" fill={color} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}