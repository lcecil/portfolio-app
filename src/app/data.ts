export const data = {
  home:  {
    theme: 'home-theme',
    panel: {
      primaryHeader: 'UX Design',
      secondaryHeader: 'and Research',
      pageDescription: 'Techniques, methodologies, and designs for a wide range of projects and problems.',
      pageLink: '#/home/details',
      pageLinkLabel: 'About Laura'
    },
    details: {
      panel: {
        primaryHeader: 'Librarians make the best designers',
        imgPath: 'assets/images/home/profile.png',
        imgAlt: `Laura Cecil's Profile`
      },
      page: {
        sections: [
          {
            sectionContent: [
              {
                sectionParagraph: `I know what you’re thinking: where are the
                reading glasses and cardigan sweaters? Old stereotypes. With the
                exception of cardigans, I do wear those.`
              },
              {
                sectionParagraph: `I have great reference interview skills, a
                passion for helping people, and can organize your book
                collection in ways you didn’t know were possible. Package those
                skills with my ability to translate ideas into solid-gold user
                interfaces, and you’ve got a great designer.`
              },
              {
                sectionParagraph: `When I'm not preparing a usability test, you
                can find me either parked on the couch with my nose in a book or
                putting up a tent in the great outdoors.`
              },
              {
                sectionParagraph: `In both cases, you can be sure I’m looking
                for inspiration from the world around me.`
              }
            ]
          }
        ],
        buttonLabel: 'View Resume',
        buttonLink: 'assets/lcecil.resume.pdf'
      }
    }
  },
  informationArchitecture:  {
    theme: 'information-architecture-theme',
    panel: {
      primaryHeader: 'Information',
      secondaryHeader: 'Architecture',
      pageDescription: `Content organization and structuring is the key to a
      successful application or website. Think of it as a card catalog for the
      21st century.`,
      pageLink: '#/information-architecture/details',
      pageLinkLabel: 'Read More'
    },
    details: {
      panel: {
        primaryHeader: 'Information Architecture',
        secondaryHeader: 'Case Study',
        pageDescription: `To make an application feel effortless to navigate, it
        has to have a strong skeleton or foundation. Information architecture is
        more than just the menu navigation at the top of a website – it’s the map
        of a product’s parts, and how those parts need to interact with each other.
        When designing a new feature for an existing product, I like to create
        a map of its pieces as one of my first steps.`
      },
      page: {
        sections: [
          {
            sectionHeader: 'The Project',
            sectionContent: [
                {
                  sectionParagraph: `Through an online survey, we found that our
                  client’s user base spent 75% of their time helping their
                  customers troubleshoot cell phone problems over the phone.
                  Without the ability to see the phone the customer was using,
                  our call center agents were often unable to solve the customer’s
                  problem. The solution was to help our users guide a customer
                  into a Target store for in-person device troubleshooting,
                  thereby reducing call volume and duration.`
                }
              ]
          },
          {
            sectionHeader: 'The Process',
            sectionContent: [
              {
                sectionParagraph: `Since this was going to be a new feature, with
                implementations across a couple of platforms, it was necessary
                to map out all the required information and parameters before
                beginning on the workflows. I created a site map of the existing
                products and workflow diagrams to ensure that our solution was
                going fit in with our users’ current processes and expectations.`
              },
              {
                sectionParagraph: `When we met with our stakeholders to gather
                feedback on the workflows, they found it difficult to understand
                how all the pieces were going to function together. Using Axure,
                I quickly created a clickable prototype of the application for
                the client to see and interact with. The ability to go through
                the process themselves with the prototype made the interactions
                clearer not only to our stakeholder, but to the developers who
                used the prototype as a guide when building out the feature.`
              }
            ]
          },
          {
            sectionHeader: 'The Results',
            sectionContent: [
              {
                sectionParagraph: `We spent a total of four months from start to
                launch, building out the new functionality and working closely
                with our stakeholders, so that they could inform and train their
                employees. In the two months since we launched the new feature,
                Target support visits have maintained approximately at 90%
                success rate for solving the customer’s device problem.`
              }
            ]
          }
        ],
        buttonLabel: 'View Images',
        imageList: [
            {
                src: 'assets/images/information-architecture/whiteboard-workflow.jpg',
                w: 2560,
                h: 1440,
                title: 'Sketching out a workflow on the whiteboard'
            },
            {
                src: 'assets/images/information-architecture/wireframe-workflow.png',
                w: 2602,
                h: 1260,
                title: 'Translating the sketches into flow diagrams for the wireframes'
            },
            {
                src: 'assets/images/information-architecture/wireframe-1.png',
                w: 2408,
                h: 1180,
                title: 'Customer Management wireframe, illustrating layout and interactions'
            },
            {
                src: 'assets/images/information-architecture/wireframe-2.png',
                w: 1912,
                h: 1108,
                title: 'Retail Kiosk wireframe for a support queue'
            },
            {
                src: 'assets/images/information-architecture/visual-design.png',
                w: 2726,
                h: 1626,
                title: 'Customer Management visual design specification'
            },
            {
                src: 'assets/images/information-architecture/final-product.png',
                w: 1792,
                h: 1406,
                title: 'The final Retail Kiosk Support Queue interface'
            }
        ]
      }
    }
  },
  researchMethods:  {
    theme: 'research-methods-theme',
    panel: {
      primaryHeader: 'Research',
      secondaryHeader: 'Methods',
      pageDescription: `From A/B Testing to user interviews and everything in
      between. Choosing the right method for the job is the name of the game here.`,
      pageLink: '#/research-methods/details',
      pageLinkLabel: 'Read More'
    },
    details: {
      panel: {
        primaryHeader: 'Research Methods',
        secondaryHeader: 'Designer Tools',
        pageDescription: `User research is always the first thing I turn to
        before tackling any project. Understanding both the qualitative and
        quantitative data behind a project is the key to developing a successful
        design. Knowing which methods to employ is also half the battle.`
      },
      page: {
        sections: [
          {
            sectionHeader: 'Usability Testing',
            sectionContent: [
              {
                sectionParagraph: `Usability testing is a necessity for all
                stages of the development process. Preliminary testing of a
                current interface can help designers understand user pain points
                and areas of interest, whereas post-release testing monitors
                whether design implementations were successful. Paper prototyping
                is my favorite method for gathering iterative feedback during the
                design lifecycle and avoiding major pitfalls.`
              }
            ]
          },
          {
            sectionHeader: 'Personas',
            sectionContent: [
              {
                sectionParagraph: `Personas are a great tool for getting a team
                on the same page about who is using the products they are creating.
                The key to a successful persona is not the physical profile itself,
                but its adoption from all stakeholders involved and application
                by a company. I work closely with clients, product owners,
                developers, and most importantly, end users, to ensure that the
                personas produced are accurate and useful.`
              }
            ]
          },
          {
            sectionHeader: 'Card Sorting',
            sectionContent: [
              {
                sectionParagraph: `The wrong label can make or break a design.
                Luckily, a quick card sort is one of the simplest ways to evaluate
                whether the terms used in a design are terms your users can
                understand. I use this research method often, either internally
                or with my end users, to test whether a grouping of information
                is logical beyond my own assumptions and biases.`
              }
            ]
          },
          {
            sectionHeader: 'Survey Design',
            sectionContent: [
              {
                sectionParagraph: `Surveys help establish both quantitative and
                qualitative data as a base line before beginning a project, or
                alternatively, assess whether a design implementation was successful.
                I find that the key to crafting a useful and accurate survey is
                to narrow the scope so that the questions are specific and focused
                on a portion of the product. This reduces the margin for error
                due to generalities or ambiguity in the survey responses.`
              }
            ]
          },
          {
            sectionHeader: 'Interviews/Observations',
            sectionContent: [
              {
                  sectionParagraph: `If the opportunity to have face-to-face
                  time with an end user is available, it can be the most valuable
                  time spent on a project. As a designer, the desire to empathize
                  with my users can only go so far without observing their daily
                  tasks or hearing stories of their struggles with a product.
                  The art of asking questions is a skill I strive to perfect and
                  often helps me answer the “why” when looking at quantitative
                  data or metrics.`
              }
            ]
          }
        ],
        buttonLabel: 'View Images',
        imageList: [
            {
                src: 'assets/images/research-methods/paper-prototype.jpg',
                w: 2448,
                h: 2448,
                title: 'A co-worker tries out a paper prototype to test for usability'
            },
            {
                src: 'assets/images/research-methods/interactive-prototype.jpg',
                w: 3259,
                h: 1669,
                title: 'Conducting an application prototype usability test for interactions'
            },
            {
                src: 'assets/images/research-methods/architecture.jpg',
                w: 2442,
                h: 2848,
                title: 'Making notes and sketches before a card sorting exercise'
            },
            {
                src: 'assets/images/research-methods/card-sorting.jpg',
                w: 3255,
                h: 1700,
                title: 'Participants group similar concepts in the card sort'
            },
            {
                src: 'assets/images/research-methods/application-mapping.jpg',
                w: 3264,
                h: 2448,
                title: 'Mapping out an application by user activities'
            },
            {
                src: 'assets/images/research-methods/personas.jpg',
                w: 3259,
                h: 2056,
                title: 'The end result of a persona brainstorming session'
            }
        ]
      }
    }
  },
  visualDesigns:  {
    theme: 'visual-designs-theme',
    panel: {
      primaryHeader: 'Visual',
      secondaryHeader: 'Designs',
      pageDescription: `Communicating a design is as important as creating it.
      Using a quick sketch or pixel perfect visual design depends on what's
      needed to get the job done.`,
      pageLink: '#/visual-designs/details',
      pageLinkLabel: 'Read More'
    },
    details: {
      panel: {
        primaryHeader: 'Visual Designs',
        secondaryHeader: 'Designer Tools',
        pageDescription: `Discussing UX designs with a development team is the
        best way to convey the mechanics of a design and thought process that
        went into it. But at the end of the day, the visual design artifacts I
        build must be strong enough to convey all the necessary information to
        developer and client alike.`
      },
      page: {
        sections: [
          {
            sectionHeader: 'Sketches',
            sectionContent: [
              {
                sectionParagraph: `I prefer pencil and paper, marker and whiteboard,
                or any other physical medium as my tool of choice when it comes
                to creating a proof of concept. Sketching out layouts or
                interactions is the quickest way to decide what’s going to make
                or break my designs. This method of drawing things out also
                facilitates collaboration between myself and other designers or
                developers, who can comment or contribute in a brainstorming
                session.`
              }
            ]
          },
          {
            sectionHeader: 'Wireframes',
            sectionContent: [
              {
                sectionParagraph: `Wireframing is thought of as a design staple,
                but I believe that depends on the project. Developers will
                eventually need high fidelity mock-ups, if the company is without
                a pattern library, and clients often have a hard time visualizing
                the application when there are only boxes and lines. Nevertheless,
                wireframes are invaluable tool for a designer to get a feel for
                proportions and interactions across pages. They provide the schema
                for all my designs.`
              }
            ]
          },
          {
            sectionHeader: 'Prototypes',
            sectionContent: [
              {
                sectionParagraph: `Interactive prototypes are crucial to
                understanding whether a design is usable and intuitive. The tools
                available today make it easy for me to create a simple clickable
                interface for usability testing or showcasing to client. Often,
                building out a page in HTML/CSS/JS is just as quick and can shorten
                development time if only minor tweaks are needed to the final design.`
              }
            ]
          },
          {
            sectionHeader: 'High Fidelity Mock-Ups',
            sectionContent: [
              {
                sectionParagraph: `My favorite thing about creating pixel perfect
                visual designs is seeing everything come together. It’s the
                opportunity to bring the application to life through color theory,
                typography, and layout principles. High fidelity mock-ups can
                play an important part in communicating a design to a client or
                developer, who may need that extra push to visualize the application.`
              }
            ]
          }
        ],
        buttonLabel: 'View Images',
        imageList: [
            {
                src: 'assets/images/visual-designs/sketching.JPG',
                w: 2448,
                h: 3264,
                title: 'Example of sketching I do in a notebook during meetings or brainstorming sessions'
            },
            {
                src: 'assets/images/visual-designs/wireframe-1.png',
                w: 2256,
                h: 1242,
                title: 'Laying out the heirarchy and information architecture for a new design'
            },
            {
                src: 'assets/images/visual-designs/wireframe-2.png',
                w: 2216,
                h: 1158,
                title: 'I like to include notes about my design motivations in the documentation for developers'
            },
            {
                src: 'assets/images/visual-designs/interactive-prototype.png',
                w: 2156,
                h: 886,
                title: 'For this design, we performed some usability testing using an Axure prototype'
            },
            {
                src: 'assets/images/visual-designs/visual-design-1.png',
                w: 2118,
                h: 632,
                title: 'The final design layout in a high fidelity mock up'
            },
            {
                src: 'assets/images/visual-designs/visual-design-2.png',
                w: 1575,
                h: 1161,
                title: 'Specifications for layout, padding, and colors help the developers with building the product'
            }
        ]
      }
    }
  },
  projectManagement: {
    theme: 'project-management-theme',
    panel: {
      primaryHeader: 'Project',
      secondaryHeader: 'Management',
      pageDescription: `Agile, scrum, sprints, waterfall, kanban: whatever the buzzword of the day is, chances are I've probably tried it.`,
      pageLink: '#/project-management/details',
      pageLinkLabel: 'Read More'
    },
    details: {
      panel: {
        primaryHeader: 'Project Management',
        secondaryHeader: 'Case Study',
        pageDescription: `Project management is a skill that all good designers
        should have. Since we often have our finger on the pulse of the product,
        it’s very natural to fall into a role of leadership and coordination.
        Organization is the key to a successful project and making sure that what
        you build is going to solve a problem.`
      },
      page: {
        sections: [
          {
            sectionHeader: 'The Project',
            sectionContent: [
              {
                sectionParagraph: `Our company’s website needed updating, both
                in content and the branding message we wanted to represent us as
                a company. After reading about the success of Google’s Design
                Sprints, the UX team decided that the website was the perfect
                opportunity for a five-day design overhaul.`
              }
            ]
          },
          {
            sectionHeader: 'The Process',
            sectionContent: [
              {
                sectionParagraph: `I gathered the UX team to discuss the best
                way to implement the schedule, assign moderators for each day,
                and make sure that we were all on the same page about what
                deliverables we needed out of each session. After going through
                the five-day process with our leadership team and other
                stakeholders, we came up with a few ideas that we could test
                with an interactive prototype and a few target audience users.`
              },
              {
                sectionParagraph: `What we gained from the design sprint was an
                understanding of what message we wanted to portray, how that
                message was received by our audience, what feature ideas
                (interactive timeline, job creator, employee photo slider) worked
                and which ones didn’t. Based on that outcome, I pulled the UX
                team together so that we could discuss our timeline for creating
                a final design and the subsequent development.`
              }
            ]
          },
          {
            sectionHeader: 'The Results',
            sectionContent: [
              {
                sectionParagraph: `Since we could quickly vet key feature ideas
                in the five-day sprint, it streamlined our development time.
                Being able to give an accurate timeline and vetted design to our
                company’s CEO and COO helped us as a team gain support for the
                project. Our involvement with those stakeholders early in the
                process also gave them a sense of ownership in the final product,
                a website that carried their message across to all audiences.`
              }
            ]
          }
        ],
        buttonLabel: 'View Images',
        imageList: [
            {
                src: 'assets/images/project-management/design-sprint.JPG',
                w: 2448,
                h: 3264,
                title: 'A selection of sketches from our design sprint'
            },
            {
                src: 'assets/images/project-management/build-a-job.png',
                w: 2166,
                h: 1308,
                title: 'An early interactive prototype for our idea of a job-builder'
            },
            {
                src: 'assets/images/project-management/contact-header.png',
                w: 2878,
                h: 1410,
                title: 'Testing out our idea of having a sticky contact header'
            },
            {
                src: 'assets/images/project-management/social-media-section.png',
                w: 2662,
                h: 1414,
                title: 'Our second prototype had a more polished look and included a social media section'
            },
            {
                src: 'assets/images/project-management/timeline.png',
                w: 2572,
                h: 1404,
                title: 'The timeline seemed like a good idea from our sprint, but ended up falling flat with users'
            },
            {
                src: 'assets/images/project-management/contact-form.png',
                w: 1438,
                h: 1580,
                title: 'A final designs for the more playful contact form that we decided worked best for our layout'
            },
            {
                src: 'assets/images/project-management/character-carousel.png',
                w: 1918,
                h: 1110,
                title: 'Our character carousel was a big hit with uesrs, so that was something we kept int he final design'
            }
        ]
      }
    }
  },
  development: {
    theme: 'development-theme',
    panel: {
      primaryHeader: 'Front-End',
      secondaryHeader: 'Development',
      pageDescription: `One of the my many hats, it ranges in size from beanie
      to ten gallon. It's more about the knowledge that I gain from wearing it
      that makes me a better designer.`,
      pageLink: '#/development/details',
      pageLinkLabel: 'Read More'
    },
    details: {
      panel: {
        primaryHeader: 'Front-End Development',
        secondaryHeader: 'Case Study',
        pageDescription: `Designers love to solve problems, developers love to
        solve puzzles. I happily enjoy doing both and believe that learning the
        skills of a front-end developer help me become a more useful designer.
        The process of translating designs into a functional application sometimes
        feels like a game of telephone, but knowing how to speak in developers’
        language helps mitigate a lot of those risks.`
      },
      page: {
        sections: [
          {
            sectionHeader: 'The Project',
            sectionContent: [
              {
                sectionParagraph: `AltSource wanted to make it easier for its
                developers to build out custom applications, without the generic
                look and feel of Bootstrap. Alternatively, the UX team wanted to
                teach the developers more about why and when certain design
                patterns should be used in the future. I worked with one of our
                primary front-end developers and a graphic designer to come up
                with a set of patterns and components that we could build as an
                interactive pattern library.`
              }
            ]
          },
          {
            sectionHeader: 'The Process',
            sectionContent: [
              {
                sectionParagraph: `The graphic designer and myself set to work
                documenting all the design patterns we needed to encompass
                current and future functionality of our application. Once we had
                those guidelines in place, I worked with my tech lead and front-end
                developer to come up with a strategy for building out the new
                patterns without disrupting styles that were already in place.`
              },
              {
                sectionParagraph: `We used Bootstrap as a framework, but customized
                it with our own CSS and Javascript so that it was unique to our
                client’s application. We wanted each part of the pattern library
                to be a working example of the components, something someone could
                click on and interact with, as well as a summary of its UX applications.
                Developers could easily copy and paste the code into their branches,
                which would help us maintain changes to the pattern library in
                the future through consistent class naming.`
              }
            ]
          },
          {
            sectionHeader: 'The Results',
            sectionContent: [
              {
                sectionParagraph: `Our pattern library serves as a go-to for all
                developers in the company and facilitates discussion around why
                to use certain patterns over others. By creating a consistent
                naming scheme and class system, we can start to tackle refactoring
                old code so that updates in the future will be as simple as
                changing CSS for a pattern.`
              }
            ]
          }
        ],
        buttonLabel: 'View Images',
        imageList: [
            {
                src: 'assets/images/development/pattern-documentation.png',
                w: 2880,
                h: 2370,
                title: 'Example of one of our interaction guidelines and pattern documentation'
            },
            {
                src: 'assets/images/development/example-pattern.png',
                w: 948,
                h: 1196,
                title: 'Template for our pattern library documentation, outlining the pieces we wanted to build in the application'
            },
            {
                src: 'assets/images/development/color-swatches.png',
                w: 1420,
                h: 1042,
                title: 'Creating a color pallete for the application and its many states'
            },
            {
                src: 'assets/images/development/pattern-application.png',
                w: 2880,
                h: 2140,
                title: 'A button pattern from our interactive application that developers use on a daily basis'
            }
        ]
      }
    }
  }
};
