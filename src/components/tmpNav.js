import React, { useState } from "react";
import { Link, useStaticQuery, graphql} from "gatsby";
import { Transition } from '@headlessui/react'
import Icon from "react-hero-icon";

export default function Nav(props){
  const [ isMobileMenu, setMobileMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        favicon {
          publicURL
        }
        logo {
          publicURL
        }
        siteName
        defaultSeo {
          metaTitle
          metaDescription
        }
        mobileLogo {
          publicURL
        }
      }
      allStrapiArticle(limit: 3, sort: {fields: publishedAt, order: DESC}) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allStrapiCategory {
        nodes {
          slug
          name
          heroIconSVGOnlyPathTag
          shortDescription
        }
      }
    }
  `);

  return (
    <div className="max-w relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div id="navigation-bar" className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Markerante</span>
              <img className="h-16 w-auto" src={data.strapiGlobal.logo.publicURL} alt={data.strapiGlobal.siteName} />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
            onClick={() => setMobileMenu(trans => !trans)}
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link to="https://www.misistemadepedidos.com/" target="_blank" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-100 bg-red-600 hover:bg-red-700">
              <Icon icon="external-link" className="text-red-100 mr-2"/> Sistema de Pedidos
            </Link>
          </div>
        </div>
      </div>

      {/* Float Menu Tailwind Transition Fix */}
      <Transition
      show={isMobileMenu}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      >
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-16 w-auto" src={data.strapiGlobal.mobileLogo.publicURL} alt={data.strapiGlobal.siteName} />
              </div>
              <div className="-mr-2">
                <button
                onClick={() => setMobileMenu(trans => !trans)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: x */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <Link to="https://www.misistemadepedidos.com/" target="_blank" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-100 bg-red-600 hover:bg-red-700">
              <Icon icon="external-link" className="text-red-100 mr-2"/> Sistema de Pedidos
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                ¿Nuevo Restaurante?
                <Link to="https://www.misistemadepedidos.com/admin/public/signup" target="_blank" className=" ml-4 text-red-500 hover:text-red-700">
                  Crear Cuenta
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </Transition>
    </div>
  );
}