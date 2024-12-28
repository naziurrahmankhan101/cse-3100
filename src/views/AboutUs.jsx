export default function AboutUs() {
    return (
      <section
        id="about-us"
        style={{
          backgroundColor: '#f4f4f4',
          padding: '40px 20px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '2.5rem', color: '#3a3a3a' }}>
          About Us
        </h2>
        <p
          style={{
            maxWidth: '800px',
            margin: '20px auto',
            color: '#555',
            fontSize: '1.2rem',
            lineHeight: '1.8',
          }}
        >
          Welcome to **Purrfect Adoption**, a place where furry friends meet
          their forever homes! We are dedicated to connecting loving families
          with adorable cats in need of care and companionship. Every cat on our
          platform has been lovingly cared for, and our goal is to ensure they
          find a safe and happy home.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#3a3a3a', fontSize: '1.5rem' }}>Our Mission</h3>
            <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
              To create a world where every cat has a safe and loving home. We
              believe in building connections between humans and their feline
              companions.
            </p>
          </div>
          <div
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#3a3a3a', fontSize: '1.5rem' }}>Why Choose Us?</h3>
            <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
              We partner with shelters and rescues to provide healthy, happy cats.
              Our dedicated team ensures that all cats are vaccinated, spayed or
              neutered, and ready for adoption.
            </p>
          </div>
          <div
            style={{
              width: '300px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#3a3a3a', fontSize: '1.5rem' }}>Our Values</h3>
            <p style={{ color: '#555', fontSize: '1rem', marginTop: '10px' }}>
              Compassion, responsibility, and love. We’re here to advocate for
              cats and inspire people to open their hearts to the joy of
              adoption.
            </p>
          </div>
        </div>
      </section>
    );
  }