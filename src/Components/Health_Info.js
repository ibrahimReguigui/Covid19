import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Health_Info() {
  return (
    <div>
      <div
        style={{
          width: "300px",
          margin: "0 auto",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <Card>
          <Card.Img
            variant="top"
            src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg"
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Wear a mask. Save lives.</Card.Title>
            <Card.Text>
              Wear a mask<br></br>
              Clean your hands<br></br>
              Keep a safe distance<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <Accordion>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                What is COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  COVID-19 is the disease caused by a new coronavirus called
                  SARS-CoV-2. WHO first learned of this new virus on 31 December
                  2019, following a report of a cluster of cases of ‘viral
                  pneumonia’ in Wuhan, People’s Republic of China.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What are the symptoms of COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  COVID-19 affects different people in different ways. Most
                  infected people will develop mild to moderate illness and
                  recover without hospitalization.<br></br>
                  Most common symptoms:
                </p>
                <p>
                  <li>fever</li>
                  <li>dry cough</li>
                  <li>tiredness</li>
                </p>
                Less common symptoms:
                <p>
                  <li>aches and pains</li>
                  <li>sore throat</li>
                  <li>diarrhoea</li>
                  <li>conjunctivitis</li>
                  <li>headache</li>
                  <li>loss of taste or smell</li>
                  <li>a rash on skin, or discolouration of fingers or toes</li>
                </p>
                Serious symptoms:
                <p>
                  <li>difficulty breathing or shortness of breath</li>
                  <li>chest pain or pressure</li>
                  <li>loss of speech or movement</li>
                </p>
                <p>
                  Seek immediate medical attention if you have serious symptoms.
                  Always call before visiting your doctor or health facility.
                  People with mild symptoms who are otherwise healthy should
                  manage their symptoms at home. On average it takes 5–6 days
                  from when someone is infected with the virus for symptoms to
                  show, however it can take up to 14 days.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                What happen to people who get COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  Among those who develop symptoms, most (about 80%) recover
                  from the disease without needing hospital treatment. About 15%
                  become seriously ill and require oxygen and 5% become
                  critically ill and need intensive care. Complications leading
                  to death may include respiratory failure, acute respiratory
                  distress syndrome (ARDS), sepsis and septic shock,
                  thromboembolism, and/or multiorgan failure, including injury
                  of the heart, liver or kidneys. In rare situations, children
                  can develop a severe inflammatory syndrome a few weeks after
                  infection.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
                Who is most at risk of severe ilness from COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <p>
                  People aged 60 years and over, and those with underlying
                  medical problems like high blood pressure, heart and lung
                  problems, diabetes, obesity or cancer, are at higher risk of
                  developing serious illness. However, anyone can get sick with
                  COVID-19 and become seriously ill or die at any age.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="7">
                Are there long term effects of COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <p>
                  Some people who have had COVID-19, whether they have needed
                  hospitalization or not, continue to experience symptoms,
                  including fatigue, respiratory and neurological symptoms. WHO
                  is working with our Global Technical Network for Clinical
                  Management of COVID-19, researchers and patient groups around
                  the world to design and carry out studies of patients beyond
                  the initial acute course of illness to understand the
                  proportion of patients who have long term effects, how long
                  they persist, and why they occur. These studies will be used
                  to develop further guidance for patient care.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="8">
                How can we protect others and our selves if we don't know who is
                infected ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <p>
                  Stay safe by taking some simple precautions, such as physical
                  distancing, wearing a mask, especially when distancing cannot
                  be maintained, keeping rooms well ventilated, avoiding crowds
                  and close contact, regularly cleaning your hands, and coughing
                  into a bent elbow or tissue. Check local advice where you live
                  and work. Do it all!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="9">
                When should i get a test for COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <p>
                  Anyone with symptoms should be tested, wherever possible.
                  People who do not have symptoms but have had close contact
                  with someone who is, or may be, infected may also consider
                  testing – contact your local health guidelines and follow
                  their guidance. While a person is waiting for test results,
                  they should remain isolated from others. Where testing
                  capacity is limited, tests should first be done for those at
                  higher risk of infection, such as health workers, and those at
                  higher risk of severe illness such as older people, especially
                  those living in seniors’ residences or long-term care
                  facilities.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="10">
                What test should i get to see if i have COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                <p>
                  In most situations, a molecular test is used to detect
                  SARS-CoV-2 and confirm infection. Polymerase chain reaction
                  (PCR) is the most commonly used molecular test. Samples are
                  collected from the nose and/or throat with a swab. Molecular
                  tests detect virus in the sample by amplifying viral genetic
                  material to detectable levels. For this reason, a molecular
                  test is used to confirm an active infection, usually within a
                  few days of exposure and around the time that symptoms may
                  begin.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="11">
                What about rapid test ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <p>
                  Rapid antigen tests (sometimes known as a rapid diagnostic
                  test – RDT) detect viral proteins (known as antigens). Samples
                  are collected from the nose and/or throat with a swab. These
                  tests are cheaper than PCR and will offer results more
                  quickly, although they are generally less accurate. These
                  tests perform best when there is more virus circulating in the
                  community and when sampled from an individual during the time
                  they are most infectious.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="12">
                I want to find out if i had COVID-19 in the past, what test
                could i take ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="12">
              <Card.Body>
                <p>
                  Antibody tests can tell us whether someone has had an
                  infection in the past, even if they have not had symptoms.
                  Also known as serological tests and usually done on a blood
                  sample, these tests detect antibodies produced in response to
                  an infection. In most people, antibodies start to develop
                  after days to weeks and can indicate if a person has had past
                  infection. Antibody tests cannot be used to diagnose COVID-19
                  in the early stages of infection or disease but can indicate
                  whether or not someone has had the disease in the past.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="13">
                what is the difference between isolation and quarantine ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="13">
              <Card.Body>
                <p>
                  Both isolation and quarantine are methods of preventing the
                  spread of COVID-19. Quarantine is used for anyone who is a
                  contact of someone infected with the SARS-CoV-2 virus, which
                  causes COVID-19, whether the infected person has symptoms or
                  not. Quarantine means that you remain separated from others
                  because you have been exposed to the virus and you may be
                  infected and can take place in a designated facility or at
                  home. For COVID-19, this means staying in the facility or at
                  home for 14 days. Isolation is used for people with COVID-19
                  symptoms or who have tested positive for the virus. Being in
                  isolation means being separated from other people, ideally in
                  a medically facility where you can receive clinical care. If
                  isolation in a medical facility is not possible and you are
                  not in a high risk group of developing severe disease,
                  isolation can take place at home. If you have symptoms, you
                  should remain in isolation for at least 10 days plus an
                  additional 3 days without symptoms. If you are infected and do
                  not develop symptoms, you should remain in isolation for 10
                  days from the time you test positive.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="14">
                What should i do if i have been exposed to someone who has
                COCID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="14">
              <Card.Body>
                <p>
                  If you have been exposed to someone with COVID-19, you may
                  become infected, even if you feel well. After exposure to
                  someone who has COVID-19, do the following: Call your health
                  care provider or COVID-19 hotline to find out where and when
                  to get a test. Cooperate with contact-tracing procedures to
                  stop the spread of the virus. If testing is not available,
                  stay home and away from others for 14 days. While you are in
                  quarantine, do not go to work, to school or to public places.
                  Ask someone to bring you supplies. Keep at least a 1-metre
                  distance from others, even from your family members. Wear a
                  medical mask to protect others, including if/when you need to
                  seek medical care. Clean your hands frequently. Stay in a
                  separate room from other family members, and if not possible,
                  wear a medical mask. Keep the room well-ventilated. If you
                  share a room, place beds at least 1 metre apart. Monitor
                  yourself for any symptoms for 14 days. Stay positive by
                  keeping in touch with loved ones by phone or online, and by
                  exercising at home. If you live in an area with malaria or
                  dengue fever, seek medical help if you have a fever. While
                  travelling to and from the health facility and during medical
                  care, wear a mask, keep at least a 1-metre distance from other
                  people and avoid touching surfaces with your hands. This
                  applies to adults and children
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="15">
                How long does it take to develop symptoms?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="15">
              <Card.Body>
                <p>
                  The time from exposure to COVID-19 to the moment when symptoms
                  begin is, on average, 5-6 days and can range from 1-14 days.
                  This is why people who have been exposed to the virus are
                  advised to remain at home and stay away from others, for 14
                  days, in order to prevent the spread of the virus, especially
                  where testing is not easily available.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="16">
                Is there a vaccin for COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="16">
              <Card.Body>
                <p>
                  Yes. The first mass vaccination programme started in early
                  December 2020 and the number of vaccination doses administered
                  is updated on a daily basis here. At least 13 different
                  vaccines (across 4 platforms) have been administered.
                  Campaigns have started in 206 economies. The Pfizer/BioNtech
                  Comirnaty vaccine was listed for WHO Emergency Use Listing
                  (EUL) on 31 December 2020. The SII/Covishield and
                  AstraZeneca/AZD1222 vaccines (developed by AstraZeneca/Oxford
                  and manufactured by the Serum Institute of India and SK Bio
                  respectively) were given EUL on 16 February. The
                  Janssen/Ad26.COV 2.S developed by Johnson & Johnson, was
                  listed for EUL on 12 March 2021. The Moderna COVID-19 vaccine
                  (mRNA 1273) was listed for EUL on 30 April 2021 and the
                  Sinopharm COVID-19 vaccine was listed for EUL on 7 May 2021.
                  The Sinopharm vaccine is produced by Beijing Bio-Institute of
                  Biological Products Co Ltd, subsidiary of China National
                  Biotec Group (CNBG). Once vaccines are demonstrated to be safe
                  and efficacious, they must be approved by national regulators,
                  manufactured to exacting standards, and distributed. WHO is
                  working with partners around the world to help coordinate key
                  steps in this process, including to facilitate equitable
                  access to safe and effective COVID-19 vaccines for the
                  billions of people who will need them.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="17">
                What should i do if i have COVID-19 symptoms ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="17">
              <Card.Body>
                <p>
                  If you have any symptoms suggestive of COVID-19, call your
                  health care provider or COVID-19 hotline for instructions and
                  find out when and where to get a test, stay at home for 14
                  days away from others and monitor your health. If you have
                  shortness of breath or pain or pressure in the chest, seek
                  medical attention at a health facility immediately. Call your
                  health care provider or hotline in advance for direction to
                  the right health facility. If you live in an area with malaria
                  or dengue fever, seek medical care if you have a fever. If
                  local guidance recommends visiting a medical centre for
                  testing, assessment or isolation, wear a medical mask while
                  travelling to and from the facility and during medical care.
                  Also keep at least a 1-metre distance from other people and
                  avoid touching surfaces with your hands. This applies to
                  adults and children.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Are there treatements for COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  Scientists around the world are working to find and develop
                  treatments for COVID-19.
                </p>
                <p>
                  <p>
                    Optimal supportive care includes oxygen for severely ill
                    patients and those who are at risk for severe disease and
                    more advanced respiratory support such as ventilation for
                    patients who are critically ill.
                  </p>
                  <p>
                    {" "}
                    Dexamethasone is a corticosteroid that can help reduce the
                    length of time on a ventilator and save lives of patients
                    with severe and critical illness.
                  </p>
                  <p>
                    Results from the WHO’s Solidarity Trial indicated that
                    remdesivir, hydroxychloroquine, lopinavir/ritonavir and
                    interferon regimens appear to have little or no effect on
                    28-day mortality or the in-hospital course of COVID-19 among
                    hospitalized patients.
                  </p>{" "}
                  <p>
                    {" "}
                    Hydroxychloroquine has not been shown to offer any benefit
                    for treatment of COVID-19.
                  </p>
                  <p>
                    WHO does not recommend self-medication with any medicines,
                    including antibiotics, as a prevention or cure for COVID-19.
                    WHO is coordinating efforts to develop treatments for
                    COVID-19 and will continue to provide new information as it
                    becomes available.
                  </p>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{ textAlign: "center" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Are antibiotics effective in preventing or treating COVID-19 ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Antibiotics do not work against viruses; they only work on
                  bacterial infections. COVID-19 is caused by a virus, so
                  antibiotics do not work. Antibiotics should not be used as a
                  means of prevention or treatment of COVID-19. In hospitals,
                  physicians will sometimes use antibiotics to prevent or treat
                  secondary bacterial infections which can be a complication of
                  COVID-19 in severely ill patients. They should only be used as
                  directed by a physician to treat a bacterial infection.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Health_Info;
