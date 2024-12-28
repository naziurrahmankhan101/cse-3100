export default function AboutUs() {
    return (
      <section
        id="about-us"
        style={{
          backgroundColor: '#e9ecef',
          padding: '50px 25px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '2.75rem', color: '#2c2c2c' }}>
          About Us
        </h2>
        <p
          style={{
            maxWidth: '750px',
            margin: '20px auto 40px',
            color: '#444',
            fontSize: '1.15rem',
            lineHeight: '1.8',
          }}
        >
          At <strong>Purrfect Adoption</strong>, we are passionate about bringing happiness 
          to both cats and families. Our mission is to create lifelong connections by 
          matching loving homes with affectionate, well-cared-for cats. Every feline friend 
          on our platform is ready to start their journey to a safe and joyful forever home.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#2c2c2c', fontSize: '1.5rem' }}>Our Mission</h3>
            <p style={{ color: '#444', fontSize: '1rem', marginTop: '10px' }}>
              We aim to ensure that every cat finds a loving and safe environment. Our mission 
              is built on the foundation of trust, care, and dedication to making lives better 
              for both pets and their new families.
            </p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#2c2c2c', fontSize: '1.5rem' }}>Why Adopt With Us?</h3>
            <p style={{ color: '#444', fontSize: '1rem', marginTop: '10px' }}>
              Our platform collaborates with reputable shelters and rescues to connect you 
              with healthy, friendly cats. From vaccinations to spaying and neutering, we 
              ensure each cat is well-prepared for their new life.
            </p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '25px',
              boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#2c2c2c', fontSize: '1.5rem' }}>Our Core Values</h3>
            <p style={{ color: '#444', fontSize: '1rem', marginTop: '10px' }}>
              Compassion, integrity, and commitment are at the heart of everything we do. 
              We strive to inspire others to embrace adoption and make a positive impact 
              on the lives of cats in need.
            </p>
          </div>
        </div>
      </section>
    );
}