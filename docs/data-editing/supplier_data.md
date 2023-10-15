# SUPPLIER DATA

### MODULE OVERVIEW

In this module, we manage supplier data for products. One product can have several sets of supplier data. This module is one sheet and is language dependent.

### DATA & DEFINITIONS

The product relations module is divided into two different templates: Product Relations and Addon Categories.

| Data | Definition | Rules & Validation |
| --- | --- | --- |
| organisation_slug | Identifier for the organisation that owns the product. | Must be an active organisation in SQARP. |
| manufacturer_article_number | The manufacturers unique identifier for the product. | Article number must exist in SQARP. |
| market_slug | Identifier for the market the supplier data refers to | Must be ISO Alpha-3 code |
| supplier_article_number | The suppliers unique identifier for the product | - |
| supplier_product_url | URL to the corresponding product page on the suppliers website | Must be valid URL. Validated for 200 response. |
| supplier_product_title_[lang] | The suppliers name for the product in the specified language | - |
| supplier_partner_pricing_unit_slug | The unit in which the product is priced | Must be valid unit. List of available units can be found here. |
| supplier_partner_packaging_unit_slug | The unit in which the product is packaged | Must be valid unit. List of available units can be found here. |
| supplier_partner_pricing_multiple | The number of pricing units per packaging unit. | Must be positive numeric value. |
| supplier_minimum_order_quantity | The minimum number of pricing units that must be purchased in a single order. | Must be positive numeric value. |
| supplier_max_delivery_time | The maximum delivery time of the product in business days. | Must be positive integer. |
| supplier_delivery_notes_[lang] | Delivery notes for the product in the specified language. | - |
| supplier_recommended_price_unit_slug | The unit corresponding to the recommended retail price of the product. | Must be valid unit. List of available units can be found here. |
| supplier_recommended_price_currency_slug | The currency corresponding to the recommended retail price of the product. |  |
| status | The products current status. | Allowed values are “ACTIVE”, “INACTIVE”, “DISCONTINUED”, “UNRELEASED” |
| release_date | The planned release date for the product | Must be on the format YYYY-MM-DD |
| discontinued_date | The planned discontinuation date for the product | Must be on the format YYYY-MM-DD |