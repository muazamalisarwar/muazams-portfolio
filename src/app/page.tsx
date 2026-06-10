import VideoIntro from '@/components/VideoIntro';

export default function Home() {
  return (
    <main>
      <VideoIntro />
      {/* Additional sections would go here below the hero */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505', color: '#333' }}>
        <h2>Next Section Content</h2>
      </section>
    </main>
  );
}
