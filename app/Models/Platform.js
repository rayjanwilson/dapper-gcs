define(['backbone'], function(Backbone) {

  var Platform = Backbone.Model.extend({

    defaults: {
      
      speed: 0, // kph.  Who the hell sets this?? TODO =P

      // Set by mavlink.global_position_int packets
      lat: undefined,
      lon: undefined,
      alt: undefined,
      relative_alt: undefined,
      vx: undefined,
      vy: undefined,
      vz: undefined,
      hdg: undefined,

      // Set by mavlink.gps_raw_int packets
      fix_type: undefined,
      satellites_visible: undefined,

      // set by mavlink.attitude packets
      pitch: undefined,
      roll: undefined,
      yaw: undefined,
      pitchspeed: undefined, // acceleration
      rollspeed: undefined, // acceleration
      yawspeed: undefined, // acceleration

      // Set by mavlink.HEARTBEAT packets
      type: undefined,
      autopilot: undefined,
      base_mode: undefined,
      custom_mode: undefined,
      system_status: undefined,
      mavlink_version: undefined,

      // Set by mavlink.SYS_STATUS packets
      voltage_battery: undefined,
      current_battery: undefined,
      battery_remaining: undefined,
      drop_rate_comm: undefined,
      errors_comm: undefined,

      // Set by mavlink.vfr_hud packets
      airspeed: undefined,
      groundspeed: undefined,
      heading: undefined,
      throttle: undefined,
      climb: undefined

    },

    initialize: function() {
      this.on('change', function() {
      }, this);
    },

    validate: function(attrs) {
      attrs.lat /= 1e07;
      attrs.lon /= 1e07;
    }

  });

  return Platform;
  
});