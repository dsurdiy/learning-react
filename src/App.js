import Section from './components/Section';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
