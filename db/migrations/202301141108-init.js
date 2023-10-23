module.exports = {
  up: async function (db) {
    await db.schema
      .createTable("human_player", (table) => {
        table
          .uuid("human_player_id")
          .defaultTo(db.raw("gen_random_uuid()"))
          .primary();
        table.dateTime("created_at").defaultTo(db.fn.now()).notNull();
      })
      .createTable("game", (table) => {
        table.uuid("game_id").defaultTo(db.raw("gen_random_uuid()")).primary();
        table.uuid("human_player_id").notNull();
        table
          .foreign("human_player_id")
          .references("human_player.human_player_id");
        table.enu("human_player_color", ["white", "black"]).notNull();
        table.enu("ai_player_color", ["white", "black"]).notNull();
        table.check("?? != ??", ["human_player_color", "ai_player_color"]);
        table.enu("winner", ["human", "ai", "active_game"]).notNull();
      })
      .createTable("piece_locations", (table) => {
        table
          .uuid("piece_locations_id")
          .defaultTo(db.raw("gen_random_uuid()"))
          .primary();
        table.uuid("game_id").notNull();
        table.foreign("game_id").references("game.game_id");
        table.smallint("human_pawn_a_row");
        table.smallint("human_pawn_a_column");
        table.boolean("human_pawn_a_captured").notNull();
        table.smallint("human_pawn_b_row");
        table.smallint("human_pawn_b_column");
        table.boolean("human_pawn_b_captured").notNull();
        table.smallint("human_pawn_c_row");
        table.smallint("human_pawn_c_column");
        table.boolean("human_pawn_c_captured").notNull();
        table.smallint("human_pawn_d_row");
        table.smallint("human_pawn_d_column");
        table.boolean("human_pawn_d_captured").notNull();
        table.smallint("human_pawn_e_row");
        table.smallint("human_pawn_e_column");
        table.boolean("human_pawn_e_captured").notNull();
        table.smallint("human_pawn_f_row");
        table.smallint("human_pawn_f_column");
        table.boolean("human_pawn_f_captured").notNull();
        table.smallint("human_pawn_g_row");
        table.smallint("human_pawn_g_column");
        table.boolean("human_pawn_g_captured").notNull();
        table.smallint("human_pawn_h_row");
        table.smallint("human_pawn_h_column");
        table.boolean("human_pawn_h_captured").notNull();
        table.smallint("human_rook_a_row");
        table.smallint("human_rook_a_column");
        table.boolean("human_rook_a_captured").notNull();
        table.smallint("human_rook_b_row");
        table.smallint("human_rook_b_column");
        table.boolean("human_rook_b_captured").notNull();
        table.smallint("human_knight_a_row");
        table.smallint("human_knight_a_column");
        table.boolean("human_knight_a_captured").notNull();
        table.smallint("human_knight_b_row");
        table.smallint("human_knight_b_column");
        table.boolean("human_knight_b_captured").notNull();
        table.smallint("human_bishop_a_row");
        table.smallint("human_bishop_a_column");
        table.boolean("human_bishop_a_captured").notNull();
        table.smallint("human_bishop_b_row");
        table.smallint("human_bishop_b_column");
        table.boolean("human_bishop_b_captured").notNull();
        table.smallint("human_queen_row");
        table.smallint("human_queen_column");
        table.boolean("human_queen_captured").notNull();
        table.smallint("human_king_row");
        table.smallint("human_king_column");
        table.boolean("human_king_captured").notNull();
        table.smallint("ai_pawn_a_row");
        table.smallint("ai_pawn_a_column");
        table.boolean("ai_pawn_a_captured").notNull();
        table.smallint("ai_pawn_b_row");
        table.smallint("ai_pawn_b_column");
        table.boolean("ai_pawn_b_captured").notNull();
        table.smallint("ai_pawn_c_row");
        table.smallint("ai_pawn_c_column");
        table.boolean("ai_pawn_c_captured").notNull();
        table.smallint("ai_pawn_d_row");
        table.smallint("ai_pawn_d_column");
        table.boolean("ai_pawn_d_captured").notNull();
        table.smallint("ai_pawn_e_row");
        table.smallint("ai_pawn_e_column");
        table.boolean("ai_pawn_e_captured").notNull();
        table.smallint("ai_pawn_f_row");
        table.smallint("ai_pawn_f_column");
        table.boolean("ai_pawn_f_captured").notNull();
        table.smallint("ai_pawn_g_row");
        table.smallint("ai_pawn_g_column");
        table.boolean("ai_pawn_g_captured").notNull();
        table.smallint("ai_pawn_h_row");
        table.smallint("ai_pawn_h_column");
        table.boolean("ai_pawn_h_captured").notNull();
        table.smallint("ai_rook_a_row");
        table.smallint("ai_rook_a_column");
        table.boolean("ai_rook_a_captured").notNull();
        table.smallint("ai_rook_b_row");
        table.smallint("ai_rook_b_column");
        table.boolean("ai_rook_b_captured").notNull();
        table.smallint("ai_knight_a_row");
        table.smallint("ai_knight_a_column");
        table.boolean("ai_knight_a_captured").notNull();
        table.smallint("ai_knight_b_row");
        table.smallint("ai_knight_b_column");
        table.boolean("ai_knight_b_captured").notNull();
        table.smallint("ai_bishop_a_row");
        table.smallint("ai_bishop_a_column");
        table.boolean("ai_bishop_a_captured").notNull();
        table.smallint("ai_bishop_b_row");
        table.smallint("ai_bishop_b_column");
        table.boolean("ai_bishop_b_captured").notNull();
        table.smallint("ai_queen_row");
        table.smallint("ai_queen_column");
        table.boolean("ai_queen_captured").notNull();
        table.smallint("ai_king_row");
        table.smallint("ai_king_column");
        table.boolean("ai_king_captured").notNull();
      })
      .createTable("game_outcome", (table) => {
        table
          .uuid("game_outcome_id")
          .defaultTo(db.raw("gen_random_uuid()"))
          .primary();
        table.uuid("game_id").notNull();
        table.foreign("game_id").references("game.game_id");
        table.enu("outcome", ["human_wins", "ai_wins", "tie", "in_progress"]);
      });
  },
  down: async function (db) {
    await db.schema
      .dropTable("game_outcome")
      .dropTable("piece_locations")
      .dropTable("game")
      .dropTable("human_player");
  },
};
