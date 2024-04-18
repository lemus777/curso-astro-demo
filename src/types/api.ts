export type APISpaceXResponse = {
  docs:          Doc[];
  totalDocs:     number;
  offset:        number;
  limit:         number;
  totalPages:    number;
  page:          number;
  pagingCounter: number;
  hasPrevPage:   boolean;
  hasNextPage:   boolean;
  prevPage:      null;
  nextPage:      number;
}

export type Doc = {
  fairings:              Fairings | null;
  links:                 Links;
  static_fire_date_utc:  Date | null;
  static_fire_date_unix: number | null;
  net:                   boolean;
  window:                number;
  rocket:                Rocket;
  success:               boolean;
  failures:              Failure[];
  details:               null | string;
  crew:                  any[];
  ships:                 string[];
  capsules:              string[];
  payloads:              string[];
  launchpad:             Launchpad;
  flight_number:         number;
  name:                  string;
  date_utc:              Date;
  date_unix:             number;
  date_local:            Date;
  date_precision:        DatePrecision;
  upcoming:              boolean;
  cores:                 Core[];
  auto_update:           boolean;
  tbd:                   boolean;
  launch_library_id:     null;
  id:                    string;
}

export type Core = {
  core:            string;
  flight:          number;
  gridfins:        boolean;
  legs:            boolean;
  reused:          boolean;
  landing_attempt: boolean;
  landing_success: null;
  landing_type:    null;
}