import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  const [restaurantState, setRestaurantState] = useState( 'holi' );
  const data = useStaticQuery(query);

  console.log(restaurantState)

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div id="hero-section"className="h-5/6 flex flex-col justify-center">
        <h2 className="text-3xl text-center">Comenzar es<br />Rápido, Fácil, Libre de Comisiones<br />  y sobretodo GRATIS ❤️</h2>
        <form action={`https://www.misistemadepedidos.com/admin/public/signup?restaurant_name=${restaurantState}&signup_source=markerante.com`} >
          <div className=" overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-4">
                  <input type="text" name="restaurant_name" id="restaurant_name" autocomplete="given-name" className="py-2 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Nombre de Restaurante"
                  onChange={e => setRestaurantState(e.target.value)}
                  />
                </div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;